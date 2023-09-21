import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import AddToCartModal from "../components/AddToCartModal";
import { addToCart } from "../store/actions";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { numberInAccount } from "../utils/numberInAccount";

export default function ProductDetail({ route }) {
	const { product } = route.params;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const cartItems = useSelector((state) => state.cartReducer.items);

	const handleAddToCart = (quantity) => {
		dispatch(
			addToCart({
				id: product.id,
				price: product.price,
				name: product.name,
				qty: quantity,
			})
		);
		console.log(`Added ${quantity} ${product.name}(s) to cart.`);
	};

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
					onAddToCart={handleAddToCart}
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
