import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from "react-native";
import CustomTouchableOpacity from "./CustomTouchableOpacity";

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
					<Text style={styles.itemPrice}>{(+item.price).toFixed(2)} MYR</Text>
				</View>
				<Text style={styles.itemQuantity}>Quantity: {item.qty}</Text>
				<Text style={styles.itemSubtotal}>
					Subtotal: {(item.price * item.qty).toFixed(2)} MYR
				</Text>
				{/* Remove button */}
				<CustomTouchableOpacity
					style={styles.removeButton}
					text={"Remove"}
					textStyle={styles.removeButtonText}
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
	removeButton: {
		height: "30%",
		width: "50%",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#d42424",
		justifyContent: "center",
		alignSelf: "center",
		marginVertical: 2,
	},
	removeButtonText: {
		textAlign: "center",
		verticalAlign: "middle",
	},
});
