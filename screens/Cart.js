import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CartProduct from "../components/CartProduct";
import RemoveFromCartModal from "../components/RemoveFromCartModal";
import EmptyCart from "../components/EmptyCart";
import { removeFromCart, initializeCart } from "../rtk-store/slices/cartSlice";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { numberInAccount } from "../utils/";
import { getCartAPI } from "../service";

export default function Cart() {
	const cartItems = useSelector((state) => state.cart.items);
	const userId = useSelector((state) => state.user.userId);

	const [itemToRemove, setItemToRemove] = useState({});
	const [isModalVisible, setIsModalVisible] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		getCartAPI(userId)
			.then((response) => {
				dispatch(initializeCart(response.data));
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const totalAmount = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const navigation = useNavigation();

	function handleCheckout() {
		navigation.navigate("ShippingForm", { totalAmount });
	}

	function handleRemoveFromCart(quantity) {
		dispatch(
			removeFromCart({
				id: itemToRemove.id,
				price: itemToRemove.price,
				name: itemToRemove.name,
				qty: quantity,
			})
		);
		console.log(`Removed ${quantity} ${itemToRemove.name}(s) from cart.`);
	}

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.flatListContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>Your Cart</Text>
				</View>
				<FlatList
					data={cartItems}
					keyExtractor={(item) => item._id.toString()}
					renderItem={({ item }) => (
						<CartProduct
							item={item}
							onGetItemDetails={(item) => setItemToRemove(item)}
							onShowModal={() => setIsModalVisible(true)}
						/>
					)}
				/>
			</View>

			{/* Buttons container */}
			<View style={styles.buttonsContainer}>
				<CustomTouchableOpacity
					text={"Go Back"}
					style={styles.goBackButton}
					onPress={() => navigation.goBack()}
					textStyle={styles.buttonText}
				/>

				{/* Checkout button */}
				<TouchableOpacity
					style={styles.checkoutButton}
					onPress={handleCheckout}
				>
					<Text style={styles.buttonText}>Checkout 🛍️</Text>
					<Text style={styles.totalAmountText}>
						Total: {numberInAccount(totalAmount.toFixed(2))} MYR
					</Text>
				</TouchableOpacity>
			</View>

			{/* Remove from cart modal*/}
			{isModalVisible && (
				<RemoveFromCartModal
					isVisible={isModalVisible}
					onClose={() => setIsModalVisible(false)}
					onRemoveFromCart={handleRemoveFromCart}
					currentQuantity={itemToRemove.qty}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingTop: 40,
		backgroundColor: "#eae1eb",
	},
	headerContainer: {
		alignSelf: "center",
		marginVertical: 10,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
	},
	flatListContainer: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(255, 0, 0, 0.1)",
	},
	buttonsContainer: {
		height: 160,
		justifyContent: "space-evenly",
	},
	goBackButton: {
		margin: 10,
		width: "80%",
		justifyContent: "center",
		alignSelf: "center",
		height: 50,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#f54248",
	},
	checkoutButton: {
		width: "80%",
		height: 80,
		margin: 10,
		justifyContent: "center",
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: "#71f0a8",
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	totalAmountText: {
		textAlign: "center",
		fontSize: 14,
	},
});
