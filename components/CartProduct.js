import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import CustomTouchableOpacity from "./CustomTouchableOpacity";
import { numberInAccount } from "../utils/";

export default function CartProduct({ item, onGetItemDetails, onShowModal }) {
	const { width: screenWidth, height: screenHeight } = useWindowDimensions();
	const itemWidth = screenWidth * 0.8;
	const itemHeight = screenHeight / 6 - 10;

	function handleRemoveButton() {
		onGetItemDetails(item);
		onShowModal();
	}

	return (
		<View style={[styles.container, { height: itemHeight, width: itemWidth }]}>
			<Image source={require("../assets/cube.png")} style={styles.image} />
			<View style={styles.detailContainer}>
				<View style={styles.itemDetailContainer}>
					<Text style={styles.itemName}>{item.name}</Text>
					<Text style={styles.itemPrice}>
						{numberInAccount((+item.price).toFixed(2))} MYR
					</Text>
				</View>
				<Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
				<Text style={styles.itemSubtotal}>
					Subtotal: {numberInAccount((item.price * item.quantity).toFixed(2))}{" "}
					MYR
				</Text>
				{/* Remove button */}
				<CustomTouchableOpacity
					style={styles.updateQuantityButton}
					text={"Revise Quantity"}
					textStyle={styles.updateQuantityText}
					onPress={handleRemoveButton}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
		flexDirection: "row",
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#ffca69",
		backgroundColor: "#fff4e0",
		marginVertical: 2,
	},
	image: {
		width: "30%",
		height: "100%",
		margin: 5,
	},
	detailContainer: {
		width: "60%",
		justifyContent: "center",
		flexDirection: "column",
		marginLeft: 5,
	},
	itemDetailContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 0,
	},
	itemName: {
		fontWeight: "bold",
		fontSize: 16,
	},
	itemQuantity: {
		fontSize: 14,
	},
	itemSubtotal: {
		fontSize: 14,
		fontWeight: "bold",
	},
	updateQuantityButton: {
		height: "30%",
		width: "60%",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#d42424",
		justifyContent: "center",
		alignSelf: "center",
		marginVertical: 2,
	},
	updateQuantityText: {
		textAlign: "center",
		verticalAlign: "middle",
	},
});
