import { View, Text, Image, StyleSheet } from "react-native";
import { numberInAccount } from "../utils";

export function Product({ item, itemWidth }) {
	return (
		<View style={[styles.container, { width: itemWidth }]}>
			<View style={styles.imageContainer}>
				<Image source={require("../assets/cube.png")} style={styles.image} />
			</View>
			<Text style={styles.itemName}>{item.name}</Text>
			<Text style={styles.itemPrice}>
				{numberInAccount(item.price.toFixed(2))} MYR
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 2,
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#e3ddd3",
	},
	imageContainer: {
		backgroundColor: "white",
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 8,
	},
	image: {
		width: 80,
		height: 80,
	},
	itemName: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	itemPrice: {
		fontSize: 16,
		textAlign: "center",
	},
});
