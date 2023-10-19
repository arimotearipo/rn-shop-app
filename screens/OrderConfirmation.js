import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Info } from "../components";
import { CustomTouchableOpacity } from "../components/customized-components/";
import { AirbnbRating } from "@rneui/themed";
import { DEFAULT_SHIPPING, DEFAULT_PAYMENT } from "../utils/constants";
import {
	numberInAccount,
	formatCardNumber,
	buildShippingAddress,
} from "../utils/";
import { useNavigation } from "@react-navigation/native";

export default function OrderConfirmation({ route }) {
	const { shippingData, paymentData, totalAmount, timestamp } = route.params;
	const navigation = useNavigation();

	// console.log(JSON.stringify(shippingData, null, 2));
	// console.log(JSON.stringify(paymentData, null, 2));
	// console.log(JSON.stringify(totalAmount, null, 2));

	const fullShippingAddress = buildShippingAddress(shippingData);

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: "#eae1eb",
			}}
		>
			<View style={styles.container}>
				<Text style={styles.thankYouHeader}>
					Thank you for shopping with us!
				</Text>

				{/* Order confirmation container */}
				<View style={styles.infoContainer}>
					<Text style={styles.header}>ORDER CONFIRMATION</Text>
					<Info
						title={"Date & Time:"}
						description={timestamp || "19/09/2023, 12:04:36 pm"}
					/>
					<Info
						title={"Name:"}
						description={shippingData.name || DEFAULT_SHIPPING.name}
					/>
					<Info
						title={"Phone Number:"}
						description={
							shippingData.phoneNumber || DEFAULT_SHIPPING.phoneNumber
						}
					/>
					<Info
						title={"Email:"}
						description={shippingData.email || DEFAULT_SHIPPING.email}
					/>
					<Info title={"Shipping Address:"} description={fullShippingAddress} />
					<Info
						title={"Payment Method:"}
						description={paymentData.paymentMethod}
					/>
					{paymentData.paymentMethod === "Debit Card/Credit Card" && (
						<>
							<Info
								title={"Cardholder's Name:"}
								description={
									paymentData.cardholderName || DEFAULT_PAYMENT.cardholderName
								}
							/>
							<Info
								title={"Card Number"}
								description={
									`${paymentData.card}\n${formatCardNumber(
										paymentData.cardNumber
									)}` ||
									`${DEFAULT_PAYMENT.card}\n${formatCardNumber(
										DEFAULT_PAYMENT.cardNumber
									)}`
								}
							/>
						</>
					)}
					{paymentData.paymentMethod === "Online Banking" && (
						<Info title={"Bank:"} description={paymentData.bank} />
					)}
					<Info
						title={"Amount Paid:"}
						description={`RM ${numberInAccount(totalAmount.toFixed(2))}`}
					/>
				</View>

				{/* Ratings */}
				<View style={styles.ratingContainer}>
					<Text style={styles.ratingLabel}>Please rate your experience</Text>
					<AirbnbRating
						count={5}
						reviews={["Terrible", "Bad", "Meh", "Good", "Fantastic!"]}
						defaultRating={5}
						selectedColor="#15b32a"
						reviewColor="#15b32a"
						size={20}
					/>
				</View>

				{/* Back to Shop button */}
				<CustomTouchableOpacity
					text={"Back to Shop"}
					style={styles.backToShopButton}
					textStyle={styles.backToShopText}
					onPress={() => navigation.navigate("ProductList")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 40,
		paddingHorizontal: 10,
		justifyContent: "space-between",
	},
	thankYouHeader: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
	},
	header: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	infoContainer: {
		marginVertical: 10,
		borderWidth: 1,
		paddingVertical: 10,
		backgroundColor: "#f5fbff",
	},
	amountPaidContainer: {
		width: "80%",
		alignSelf: "center",
		alignItems: "center",
		borderColor: "black",
		padding: 10,
	},
	amountPaidText: {
		fontSize: 22,
		fontWeight: "bold",
	},
	ratingContainer: {
		marginBottom: 40,
		alignItems: "center",
	},
	ratingLabel: {
		fontSize: 24,
		fontWeight: "bold",
	},
	backToShopButton: {
		margin: 10,
		width: "50%",
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#f54248",
		alignSelf: "center",
	},
	backToShopText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
