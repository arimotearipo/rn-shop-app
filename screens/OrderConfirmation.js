import { View, Text, StyleSheet, ScrollView } from "react-native";
import Info from "../components/Info";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import formatCardNumber from "../utils/formatCardNumber";
import { AirbnbRating } from "react-native-ratings";
import { DEFAULT_SHIPPING, DEFAULT_PAYMENT } from "../utils/constants";

export default function OrderConfirmation({ route }) {
	const { shippingData, paymentData, totalAmount, timestamp } = route.params;

	const navigation = useNavigation();

	console.log(JSON.stringify(shippingData, null, 2));
	console.log(JSON.stringify(paymentData, null, 2));
	console.log(JSON.stringify(totalAmount, null, 2));

	const fullShippingAddress = `${
		shippingData.shippingAddress || DEFAULT_SHIPPING.shippingAddress
	}\n${shippingData.zipcode || DEFAULT_SHIPPING.zipcode} ${
		shippingData.city || DEFAULT_SHIPPING.city
	}\n${shippingData.country || DEFAULT_SHIPPING.country}`;

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: "#eae1eb",
				borderWidth: 1,
				borderColor: "red",
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
					<View style={styles.amountPaidContainer}>
						<Text style={styles.amountPaidText}>Amount Paid:</Text>
						<Text style={styles.amountPaidText}>
							{totalAmount.toFixed(2)} MYR
						</Text>
					</View>
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
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
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
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "center",
		borderColor: "black",
		// borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		backgroundColor: "#b2bed1",
	},
	amountPaidText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#2e3238",
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
