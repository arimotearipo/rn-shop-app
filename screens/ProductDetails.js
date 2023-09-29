import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import AddToCartModal from "../components/AddToCartModal";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { numberInAccount } from "../utils/numberInAccount";

export default function ProductDetail({ route }) {
	const { product } = route.params;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const navigation = useNavigation();
	const cartItems = useSelector((state) => state.cart.items);

	// const handleAddToCart = (quantity) => {
	// 	dispatch(
	// 		addToCart({
	// 			_id: product._id,
	// 			name: product.name,
	// 			price: product.price,
	// 			description: product.description,
	// 			quantity,
	// 		})
	// 	);
	// 	console.log(`Added ${quantity} ${product.name}(s) to cart.`);
	// };

	// async function handleAddToCart(quantity) {
	// 	try {
	// 		await dispatch(
	// 			addToCartAction({
	// 				_id: product._id,
	// 				name: product.name,
	// 				price: product.price,
	// 				description: product.description,
	// 				quantity,
	// 			})
	// 		);

	// 		console.log(`Added ${quantity} ${product.name}(s) to cart.`);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	return (
		<ScrollView style={{ flex: 1, backgroundColor: "#eae1eb" }}>
			<View style={styles.container}>
				<Image source={require("../assets/cube.png")} style={styles.image} />
				<Text style={styles.productNameText}>{product.name}</Text>
				<Text style={styles.productPriceText}>
					{numberInAccount(product.price.toFixed(2))} MYR
				</Text>
				<Text style={styles.productDescriptionText}>{product.description}</Text>
				<CustomTouchableOpacity
					style={styles.addToCartButton}
					onPress={() => setIsModalVisible(true)}
					textStyle={styles.buttonText}
					text={"Add to Cart"}
				/>
				{cartItems.length != 0 && (
					<CustomTouchableOpacity
						style={styles.goToCartButton}
						onPress={() => navigation.navigate("Cart")}
						textStyle={styles.buttonText}
						text={"Go to Cart"}
					/>
				)}
				<CustomTouchableOpacity
					style={styles.goBackButton}
					onPress={() => navigation.navigate("Home")}
					textStyle={styles.buttonText}
					text={"Go Back"}
				/>
				<AddToCartModal
					isVisible={isModalVisible}
					onClose={() => setIsModalVisible(false)}
					product={product}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 200,
	},
	productNameText: {
		fontSize: 24,
		fontWeight: "bold",
	},
	productPriceText: {
		fontSize: 18,
		marginTop: 10,
	},
	productDescriptionText: {
		margin: 10,
		fontSize: 18,
		color: "#322a33",
	},
	addToCartButton: {
		margin: 10,
		width: "50%",
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#31c7de",
	},
	goBackButton: {
		margin: 10,
		width: "50%",
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#f54248",
	},
	goToCartButton: {
		margin: 10,
		width: "50%",
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#7cd694",
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
