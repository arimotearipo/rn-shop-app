import { CustomInput, CustomPicker } from "./customized-components/";
import { View, StyleSheet } from "react-native";

export function CreditDebitCard({ control }) {
	const cardSelections = [
		{ id: "1", label: "MasterCard", value: "MasterCard" },
		{ id: "2", label: "Visa", value: "Visa" },
	];

	return (
		<View style={styles.container}>
			{/* Select Visa/MasterCard */}
			<CustomPicker
				control={control}
				name={"card"}
				style={styles.customPickerContainer}
				labelStyle={styles.labelStyle}
				label={"Please select service provider:"}
				selections={cardSelections}
				rules={{ required: "Please select service provider" }}
			/>

			{/* Cardholder name */}
			<CustomInput
				control={control}
				name={"cardholderName"}
				style={styles.input}
				placeholder={"Cardholder's Name"}
				rules={{ required: "Cardholder's name is required" }}
			/>

			{/* Card number */}
			<CustomInput
				control={control}
				name={"cardNumber"}
				style={styles.input}
				placeholder={"Card Number"}
				rules={{ required: "Card number is required" }}
				keyboardType={"numeric"}
			/>

			{/* Security code */}
			<CustomInput
				control={control}
				name={"securityCode"}
				style={styles.input}
				placeholder={"Security Code"}
				rules={{ required: "Security code is required" }}
				keyboardType={"numeric"}
			/>

			{/* Expiry date */}
			<CustomInput
				control={control}
				name={"expiryDate"}
				style={styles.input}
				placeholder={"Expiry Date"}
				rules={{ required: "Expiry date is required" }}
				keyboardType={"number-pad"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "80%",
		marginBottom: 20,
	},
	customPickerContainer: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		backgroundColor: "#f0f0ff",
	},
	labelStyle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		width: "100%",
		height: 50,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 8,
		padding: 8,
		backgroundColor: "#f0f0ff",
	},
});
