import { useEffect } from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { CustomTouchableOpacity } from "./customized-components";
import { StyleSheet, Alert } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";
import axios from "axios";

export function StripePayment() {
	const { initPaymentSheet, presentPaymentSheet } = useStripe();

	const fetchPaymentSheetParams = async () => {
		try {
			const { data } = await axios.post(`http://10.0.2.2:3000/api/payment`, {});
			const { paymentIntent, ephemeralKey, customer } = data;

			return {
				paymentIntent,
				ephemeralKey,
				customer,
			};
		} catch (error) {
			console.error(error);
		}
	};

	const initializePaymentSheet = async () => {
		const { paymentIntent, ephemeralKey, customer } =
			await fetchPaymentSheetParams();

		const { error } = await initPaymentSheet({
			merchantDisplayName: "Example, Inc.",
			customerId: customer,
			customerEphemeralKeySecret: ephemeralKey,
			paymentIntentClientSecret: paymentIntent,
			allowsDelayedPaymentMethods: true,
			defaultBillingDetails: {
				name: "Jane Doe",
			},
		});
	};

	const openPaymentSheet = async () => {
		const { error } = await presentPaymentSheet();

		if (error) {
			Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
			Alert.alert("Success", "Your order is confirmed!");
		}
	};

	useEffect(() => {
		initializePaymentSheet();
	}, []);

	return (
		<StripeProvider publishableKey="pk_test_51MNIH9I6DzLO0fdc0vEAwQ3QvyOe02Oi10eowr4HUyR6PaiNeLo6JHQ5BybERfP0KsYpTeqPQO7RbACcftKIwhs1008i2OrOpB">
			<CustomTouchableOpacity
				style={styles.placeOrderButton}
				text="Place Order"
				onPress={openPaymentSheet}
				textStyle={styles.buttonText}
			/>
		</StripeProvider>
	);
}

const styles = StyleSheet.create({
	placeOrderButton: {
		width: "40%",
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "black",
		marginBottom: 10,
		backgroundColor: "#71f0a8",
		justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
});
