import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import OnlineBanking from "../components/OnlineBanking";
import CreditDebitCard from "../components/CreditDebitCard";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from "react-native-radio-buttons-group";
import { find } from "lodash";

export default function PaymentForm({ route }) {
	const { totalAmount, shippingData } = route.params;

	const [paymentMethod, setPaymentMethod] = useState();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log("errors", errors);

	const navigation = useNavigation();

	const paymentMethodSelections = [
		{ id: "1", label: "Online Banking", value: "Online Banking" },
		{
			id: "2",
			label: "Debit Card/Credit Card",
			value: "Debit Card/Credit Card",
		},
		{ id: "3", label: "Cash on Delivery", value: "Cash on Delivery" },
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

	return (
		<ScrollView style={{ flex: 1, backgroundColor: "#eae1eb" }}>
			<View style={styles.container}>
				{/* Header */}
				<Text style={styles.header}>Checkout</Text>

				{/* Total Amount */}
				<View style={styles.totalAmountContainer}>
					<Text style={styles.totalAmountText}>Amount to pay:</Text>
					<Text style={styles.totalAmountText}>
						{totalAmount.toFixed(2)} MYR
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
						onPress={setPaymentMethod}
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
							backgroundColor:
								Object.keys(errors).length != 0 ? "#a9afc2" : "#71f0a8",
						},
					]}
					onPress={handleSubmit(handleCheckout)}
					text={"Place Order"}
					textStyle={styles.placeOrderButtonText}
					disabled={Object.keys(errors).length != 0}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
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
	paymentMethodContainer: {},
	paymentMethodLabel: {
		fontWeight: "bold",
		fontSize: 16,
	},
	radioContainer: {
		alignItems: "flex-start",
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
		marginTop: 20,
		justifyContent: "center",
		backgroundColor: "#71f0a8",
	},
	placeOrderButtonText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
});
