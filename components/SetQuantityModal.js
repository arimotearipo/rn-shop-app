import { CustomTouchableOpacity } from "./customized-components";
import {
	View,
	Text,
	Modal,
	TextInput,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useState } from "react";
import { isNumeric } from "../utils";
import { useDispatch } from "react-redux";
import { updateCartAction, removeFromCartAction } from "../rtk-store/actions";

export function SetQuantityModal({
	isVisible,
	onClose,
	product,
	quantityInCart = "1",
	isAddToCart = false,
}) {
	const [quantity, setQuantity] = useState(quantityInCart.toString());
	const [inputError, setInputError] = useState(false);

	const dispatch = useDispatch();

	// To check for error when user adjusts the value inside the text input
	// If the value is invalid, the `Add to Cart` button will be disabled
	// Value is invalid if it is not a number or if it is less than one
	function checkInputError(numberText) {
		if (!isNumeric(numberText) || +numberText < 1) {
			setInputError(true);
		} else {
			setInputError(false);
		}
	}

	// When user clicks the + button
	function handleIncrement() {
		setQuantity((prev) => {
			checkInputError((+prev + 1).toString());
			return (+prev + 1).toString();
		});
	}

	// When user clicks the - button
	function handleDecrement() {
		if (isAddToCart && +quantity <= 1) return; // Minimum is 1 for add to cart
		if (+quantity <= 0) return; // Minimum is 0

		setQuantity((prev) => {
			checkInputError((+prev + 1).toString());
			return (+prev - 1).toString();
		});
	}

	// When user manually keys in the value inside the text input
	function handleInputChange(text) {
		checkInputError(text);
		setQuantity(text);
	}

	async function handleUpdateQuantity() {
		if (+quantity === 0) {
			handleRemoveAll();
			return;
		}

		try {
			await dispatch(
				updateCartAction({
					_id: product._id,
					name: product.name,
					price: product.price,
					description: product.description,
					quantity: +quantity,
				})
			);

			console.log(`Added ${quantity} ${product.name}(s) to cart.`);
			onClose();
		} catch (error) {
			console.error(error);
		}
	}

	async function handleRemoveAll() {
		try {
			dispatch(
				removeFromCartAction({
					_id: product._id,
					name: product.name,
					price: product.price,
					description: product.description,
					quantity: +quantityInCart,
				})
			);

			console.log(`Removed ${product.name} from cart.`);
			onClose();
		} catch (error) {
			console.error(error);
		}
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
							{/* - button */}
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleDecrement}
								text={"-"}
								textStyle={styles.varyQuantityText}
							/>

							{/* Quantity input */}
							<TextInput
								style={styles.input}
								placeholder="Quantity"
								keyboardType="numeric"
								value={quantity}
								onChangeText={(text) => handleInputChange(text)}
								error={inputError}
							/>

							{/* + button */}
							<CustomTouchableOpacity
								style={styles.varyQuantityButton}
								onPress={handleIncrement}
								text={"+"}
								textStyle={styles.varyQuantityText}
							/>
						</View>

						{/* Error message if value is invalid */}
						<View style={styles.inputErrorContainer}>
							<Text style={styles.inputError}>
								{inputError == true && "Quantity must be at least 1"}
							</Text>
						</View>

						{/* Button to update/confirm new value */}
						<CustomTouchableOpacity
							style={[
								styles.buttons,
								{ backgroundColor: inputError ? "#a9afc2" : "#5784ff" },
							]}
							onPress={handleUpdateQuantity}
							disabled={inputError}
							text={isAddToCart ? "Add to Cart" : "Update Quantity"}
							textStyle={styles.buttonsText}
						/>

						{isAddToCart == false && (
							<CustomTouchableOpacity
								style={[styles.buttons, { backgroundColor: "#eb7f05" }]}
								onPress={handleRemoveAll}
								text={"Remove All"}
								textStyle={styles.buttonsText}
							/>
						)}

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
	},
	buttonsText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
});
