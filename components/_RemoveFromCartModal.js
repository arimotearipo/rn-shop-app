/**
 * DEPRECATED.
 * This component has been refactored into
 * the SetQuantityModal component
 */

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

export default function RemoveFromCartModal({
	isVisible,
	onClose,
	onRemoveFromCart,
	currentQuantity,
}) {
	const [quantity, setQuantity] = useState(currentQuantity.toString());
	const [inputError, setInputError] = useState(false);

	// When user clicks the + button
	function handleIncrement() {
		if (+quantity >= currentQuantity) return; // Cannot remove quantity more than the current quantity in cart
		setQuantity((prev) => {
			checkInputError((+prev + 1).toString());
			return (+prev + 1).toString();
		});
	}

	// When user clicks the - button
	function handleDecrement() {
		if (+quantity <= 1) return;
		setQuantity((prev) => {
			checkInputError((+prev - 1).toString());
			return (+prev - 1).toString();
		});
	}

	function handleRemoveFromCart() {
		const quantityInt = parseInt(quantity, 10);
		if (quantityInt > 0) {
			onRemoveFromCart(quantityInt);
			onClose();
		}
	}

	// Check for invalid values when user manually keys in the value inside the text input
	// If it is invalid, the 'Remove from Cart' button will be disabled
	function checkInputError(numberText) {
		if (!isNumeric(numberText) || +numberText > currentQuantity) {
			setInputError(true);
		} else {
			setInputError(false);
		}
	}

	// When user manually keys in the value inside the text input
	function handleInputChange(text) {
		checkInputError(text);
		setQuantity(text);
	}

	// When user clicks "Remove All"
	function handleRemoveAll() {
		setQuantity(currentQuantity.toString());
		handleRemoveFromCart();
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

						{/* Input container */}
						<View style={styles.inputContainer}>
							{/* Deduct button */}
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleDecrement}
								text={"-"}
								textStyle={styles.varyQuantityText}
							/>
							{/* Number input form */}
							<TextInput
								style={styles.input}
								placeholder="Quantity"
								keyboardType="numeric"
								value={quantity}
								onChangeText={(text) => handleInputChange(text)}
								error={inputError}
							/>
							{/* Add button */}
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleIncrement}
								text={"+"}
								textStyle={styles.varyQuantityText}
							/>
						</View>

						{/* Input error message */}
						<View style={styles.inputErrorContainer}>
							<Text style={styles.inputError}>
								{inputError == true &&
									`Quantity must be between 1 and ${currentQuantity}`}
							</Text>
						</View>

						{/* Remove From Cart button */}
						<CustomTouchableOpacity
							style={[
								styles.buttons,
								{ backgroundColor: inputError ? "#a9afc2" : "#5784ff" },
							]}
							onPress={handleRemoveFromCart}
							disabled={inputError}
							text={"Remove from Cart"}
							textStyle={styles.buttonsText}
						/>

						{/* Remove All button */}
						<CustomTouchableOpacity
							style={[styles.buttons, { backgroundColor: "#eb7f05" }]}
							text={"Remove All"}
							textStyle={styles.buttonsText}
							onPress={handleRemoveAll}
						/>

						{/* Cancel button */}
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
		justifyContent: "space-evenly",
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
		padding: 8,
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
		width: "70%",
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
