import React, { useState } from "react";
import {
	View,
	Text,
	Modal,
	TextInput,
	StyleSheet,
	ScrollView,
} from "react-native";
import CustomTouchableOpacity from "./CustomTouchableOpacity";
import { isNumeric } from "../utils";

export default function AddToCartModal({ isVisible, onClose, onAddToCart }) {
	const [quantity, setQuantity] = useState("1");
	const [inputError, setInputError] = useState(false);

	function checkInputError(numberText) {
		if (!isNumeric(numberText) || +numberText < 1) {
			setInputError(true);
		} else {
			setInputError(false);
		}
	}

	function handleIncrement() {
		setQuantity((prev) => {
			checkInputError((+prev + 1).toString());
			return (+prev + 1).toString();
		});
	}

	function handleDecrement() {
		if (+quantity <= 1) return;
		setQuantity((prev) => {
			checkInputError((+prev + 1).toString());
			return (+prev - 1).toString();
		});
	}

	function handleAddToCart() {
		const quantityInt = parseInt(quantity, 10);
		if (quantityInt > 0) {
			onAddToCart(quantityInt);
			onClose();
		}
	}

	function handleInputChange(text) {
		checkInputError(text);
		setQuantity(text);
	}

	return (
		<Modal
			visible={isVisible}
			transparent={true}
			animationType="slide"
			onRequestClose={onClose}
		>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ minHeight: "100%" }}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalHeader}>Select Quantity</Text>
						<View style={styles.inputContainer}>
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleDecrement}
								text={"-"}
								textStyle={styles.varyQuantityText}
							/>
							<TextInput
								style={styles.input}
								placeholder="Quantity"
								keyboardType="numeric"
								value={quantity}
								onChangeText={(text) => handleInputChange(text)}
								error={inputError}
							/>
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleIncrement}
								text={"+"}
								textStyle={styles.varyQuantityText}
							/>
						</View>

						<View style={styles.inputErrorContainer}>
							<Text style={styles.inputError}>
								{inputError == true && "Quantity must be at least 1"}
							</Text>
						</View>

						<CustomTouchableOpacity
							style={[
								styles.buttons,
								{ backgroundColor: inputError ? "#a9afc2" : "#5784ff" },
							]}
							onPress={handleAddToCart}
							disabled={inputError}
							text={"Add to Cart"}
							textStyle={styles.buttonsText}
						/>
						<CustomTouchableOpacity
							style={[styles.buttons, { backgroundColor: "#f54248" }]}
							onPress={onClose}
							text={"Cancel"}
							textStyle={styles.buttonsText}
						/>
					</View>
				</View>
			</ScrollView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "#e4ebe5",
		padding: 10,
		borderRadius: 10,
		elevation: 5,
		width: "70%",
		height: 300,
		alignItems: "center",
		justifyContent: "center",
	},
	modalHeader: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 10,
	},
	inputContainer: {
		flexDirection: "row",
		height: 40,
	},
	varyQuantityButton: {
		width: "24%",
		height: 40,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 2,
		backgroundColor: "#a9b858",
	},
	varyQuantityText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		width: "30%",
		height: 40,
		borderColor: "gray",
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 8,
		textAlign: "center",
		fontSize: 16,
	},
	inputErrorContainer: {
		height: 20,
		marginBottom: 10,
	},
	inputError: {
		color: "red",
		fontWeight: "bold",
	},
	buttons: {
		width: "50%",
		height: 50,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsText: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
