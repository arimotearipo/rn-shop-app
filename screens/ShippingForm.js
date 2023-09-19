import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import CustomPicker from "../components/CustomPicker";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { EMAIL_REGEX } from "../utils/constants";

export default function ShippingForm({ route }) {
	const { totalAmount } = route.params;
	const navigation = useNavigation();

	const countriesSelection = [
		{ label: "USA", value: "USA" },
		{ label: "Malaysia", value: "Malaysia" },
		{ label: "Indonesia", value: "Indonesia" },
		{ label: "Thailand", value: "Thailand" },
		{ label: "Vietnam", value: "Vietnam" },
		{ label: "Singapore", value: "Singapore" },
		{ label: "Philippines", value: "Philippines" },
	];

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleCheckout(shippingData) {
		navigation.navigate("PaymentForm", { totalAmount, shippingData });
	}

	return (
		<ScrollView style={{ flex: 1, backgroundColor: "#eae1eb" }}>
			<View style={styles.container}>
				<Text style={styles.header}>Shipping Details</Text>

				{/* Name input */}
				<CustomInput
					control={control}
					name={"name"}
					style={styles.input}
					placeholder={"Name"}
					// rules={{ required: "Name is required" }}
				/>

				{/* Phone number input */}
				<CustomInput
					control={control}
					name={"phoneNumber"}
					style={styles.input}
					placeholder={"Phone Number"}
					// rules={{ required: "Phone number is required" }}
					keyboardType={"phone-pad"}
				/>

				{/* Email input */}
				<CustomInput
					control={control}
					name={"email"}
					style={styles.input}
					placeholder={"Email"}
					// rules={{
					// 	required: "Email is required",
					// 	pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
					// }}
				/>

				{/* Shipping Address input */}
				<CustomInput
					control={control}
					name={"shippingAddress"}
					style={styles.input}
					placeholder={"Shipping Address"}
					// rules={{ required: "Shipping address is required" }}
				/>

				{/* Zipcode */}
				<CustomInput
					control={control}
					name={"zipcode"}
					style={styles.input}
					placeholder={"Zipcode"}
					// rules={{ required: "Zipcode is required" }}
					keyboardType={"numeric"}
				/>

				{/* City */}
				<CustomInput
					control={control}
					name={"city"}
					style={styles.input}
					placeholder={"City"}
					// rules={{ required: "City is required" }}
				/>

				{/* Country picker */}
				<CustomPicker
					control={control}
					name={"country"}
					style={styles.pickerContainer}
					labelStyle={styles.pickerlabelStyle}
					label={"Please select your country:"}
					selections={countriesSelection}
					// rules={{ required: "Please select a country" }}
				/>

				<CustomTouchableOpacity
					style={[
						styles.payButton,
						{
							backgroundColor:
								Object.keys(errors).length != 0 ? "#a9afc2" : "#71f0a8",
						},
					]}
					onPress={handleSubmit(handleCheckout)}
					text={"Pay"}
					textStyle={styles.payButtonText}
					disabled={Object.keys(errors).length != 0}
				/>
				<CustomTouchableOpacity
					style={styles.goBackButton}
					onPress={() => navigation.goBack()}
					text={"Go Back"}
					textStyle={styles.payButtonText}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 40,
		backgroundColor: "#eae1eb",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	totalAmount: {
		fontSize: 18,
		marginBottom: 10,
	},
	input: {
		width: "80%",
		height: 50,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: "black",
		padding: 8,
	},
	pickerContainer: {
		width: "80%",
		borderWidth: 1,
		marginBottom: 10,
	},
	pickerlabelStyle: {
		fontSize: 16,
		textAlign: "left",
	},
	payButton: {
		width: "40%",
		height: 50,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "black",
		backgroundColor: "#71f0a8",
		justifyContent: "center",
	},
	goBackButton: {
		width: "40%",
		height: 50,
		marginBottom: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#f54248",
		justifyContent: "center",
	},
	payButtonText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
});
