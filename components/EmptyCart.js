import { View, Text, StyleSheet } from "react-native";
import { CustomTouchableOpacity } from "./customized-components/";
import { handleGoToShop } from "../utils/navigation-utils";

export function EmptyCart() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>You have nothing in your cart</Text>
			<CustomTouchableOpacity
				style={styles.backToShopButton}
				text={"Back to Shop"}
				textStyle={styles.backToShopText}
				onPress={handleGoToShop}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		justifyContent: "center",
		backgroundColor: "#eae1eb",
	},
	text: {
		fontWeight: "bold",
		fontSize: 28,
		textAlign: "center",
	},
	backToShopButton: {
		alignSelf: "center",
		backgroundColor: "#7cd694",
		width: "50%",
		height: 40,
		borderRadius: 10,
		justifyContent: "center",
		marginTop: 10,
	},
	backToShopText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		color: "#100133",
	},
});
