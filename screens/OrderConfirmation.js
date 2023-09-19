import { View, Text, StyleSheet, ScrollView } from "react-native";
import Info from "../components/Info";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import formatCardNumber from "../utils/formatCardNumber";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function OrderConfirmation({ route }) {
	const { shippingData, paymentData, totalAmount, timestamp } = route.params;

	const navigation = useNavigation();

	console.log(JSON.stringify(shippingData, null, 2));
	console.log(JSON.stringify(paymentData, null, 2));
	console.log(JSON.stringify(totalAmount, null, 2));

	const fullShippingAddress = `${
		shippingData.shippingAddress || "308, Negra Arroyo Lane"
	}\n${shippingData.zipcode || "87111"} ${
		shippingData.city || "Albuquerque"
	}\n${shippingData.country || "USA"}`;

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
						description={shippingData.name || "Walter Hartwell White"}
					/>
					<Info
						title={"Phone Number:"}
						description={shippingData.phoneNumber || "0123456789"}
					/>
					<Info
						title={"Email:"}
						description={shippingData.email || "heisenberg@gmail.com"}
					/>
					<Info title={"Shipping Address:"} description={fullShippingAddress} />
					<Info
						title={"Payment Method:"}
						description={paymentData.paymentMethod || "Debit Card/Credit Card"}
					/>
					{paymentData.paymentMethod === "Debit Card/Credit Card" && (
						<>
							<Info
								title={"Cardholder's Name:"}
								description={
									paymentData.cardholderName || "Walter Hartwell White"
								}
							/>
							<Info
								title={"Card Number"}
								description={
									`${paymentData.card}\n${formatCardNumber(
										paymentData.cardNumber
									)}` || "5310 7862 8182 2029"
								}
							/>
						</>
					)}
					{paymentData.paymentMethod === "Online Banking:" && (
						<Info title={"Bank"} description={paymentData.bank} />
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
