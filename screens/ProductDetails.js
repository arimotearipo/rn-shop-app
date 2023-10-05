import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SetQuantityModal } from "../components/";
import { CustomTouchableOpacity } from "../components/customized-components/";
import { numberInAccount } from "../utils/";
import { handleGoToCart, handleGoToShop } from "../utils/navigation-utils";

export default function ProductDetail({ route }) {
	const { product } = route.params;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const cartItems = useSelector((state) => state.cart.items);

	function handleShowModal() {
		setIsModalVisible(true);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
	}

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
					onPress={handleShowModal}
					textStyle={styles.buttonText}
					text={"Add to Cart"}
				/>

				{/* Go To Cart button.
					Only show this button if cart is not empty */}
				{cartItems.length != 0 && (
					<CustomTouchableOpacity
						style={styles.goToCartButton}
						onPress={handleGoToCart}
						textStyle={styles.buttonText}
						text={"Go to Cart"}
					/>
				)}

				{/* Go Back button */}
				<CustomTouchableOpacity
					style={styles.goBackButton}
					onPress={handleGoToShop}
					textStyle={styles.buttonText}
					text={"Go Back"}
				/>

				{/* Modal to set quantity */}
				<SetQuantityModal
					isVisible={isModalVisible}
					onClose={handleCloseModal}
					product={product}
					isAddToCart={true}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 40,
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
