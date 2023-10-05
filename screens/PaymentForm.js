import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { CustomTouchableOpacity } from "../components/customized-components/";
import { OnlineBanking, CreditDebitCard } from "../components/";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from "react-native-radio-buttons-group";
import { find } from "lodash";
import { numberInAccount } from "../utils/";

export default function PaymentForm({ route }) {
	const { totalAmount, shippingData } = route.params;

	const [paymentMethod, setPaymentMethod] = useState("1");

	const {
		control,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm();

	console.log("errors", errors);

	const navigation = useNavigation();

	const paymentMethodSelections = [
		{
			id: "1",
			label: "Online Banking",
			value: "Online Banking",
		},
		{
			id: "2",
			label: "Debit Card/Credit Card",
			value: "Debit Card/Credit Card",
		},
		{
			id: "3",
			label: "Cash on Delivery",
			value: "Cash on Delivery",
		},
	];

	function handleCheckout(paymentData) {
		const timestamp = new Date(Date.now());
		const { value } = find(paymentMethodSelections, ["id", paymentMethod]);

		navigation.navigate("OrderConfirmation", {
			totalAmount,
			shippingData,
			paymentData: {
				...paymentData,
				paymentMethod: value,
			},
			timestamp: timestamp.toLocaleString(),
		});
	}

	function checkButtonDisabled() {
		if (paymentMethod === "3") return false;

		if (Object.keys(errors).length != 0) return true;

		return false;
	}

	return (
		<ScrollView style={{ flex: 1, backgroundColor: "#eae1eb" }}>
			<View style={styles.container}>
				{/* Header */}
				<Text style={styles.header}>Checkout</Text>

				{/* Total Amount */}
				<View style={styles.totalAmountContainer}>
					<Text style={styles.totalAmountText}>Amount to pay:</Text>
					<Text style={styles.totalAmountText}>
						{numberInAccount(totalAmount.toFixed(2))} MYR
					</Text>
				</View>

				{/* Payment Method selector */}
				<View style={styles.paymentMethodContainer}>
					<Text style={styles.paymentMethodLabel}>
						Please select a payment method:
					</Text>
					<RadioGroup
						containerStyle={styles.radioContainer}
						radioButtons={paymentMethodSelections}
						onPress={(id) => {
							setPaymentMethod(id);
							clearErrors();
						}}
						selectedId={paymentMethod}
					/>
				</View>

				{/* Online banking form */}
				{paymentMethod === "1" && <OnlineBanking control={control} />}

				{/* Credit card / Debit card form */}
				{paymentMethod === "2" && <CreditDebitCard control={control} />}

				<CustomTouchableOpacity
					style={[
						styles.placeOrderButton,
						{
							backgroundColor: checkButtonDisabled() ? "#a9afc2" : "#71f0a8",
						},
					]}
					onPress={handleSubmit(handleCheckout)}
					text={"Place Order"}
					textStyle={styles.buttonText}
					disabled={checkButtonDisabled()}
				/>
				<CustomTouchableOpacity
					style={styles.goBackButton}
					onPress={() => navigation.goBack()}
					text={"Go Back"}
					textStyle={styles.buttonText}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 40,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	totalAmountContainer: {
		width: "80%",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	totalAmountText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	paymentMethodContainer: {
		width: "80%",
	},
	paymentMethodLabel: {
		fontWeight: "bold",
		fontSize: 16,
	},
	radioContainer: {
		alignItems: "flex-start",
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 50,
		marginBottom: 10,
		borderColor: "gray",
		borderWidth: 1,
		padding: 8,
	},
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
	goBackButton: {
		width: "40%",
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "black",
		marginBottom: 10,
		backgroundColor: "#f54248",
		justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
});
