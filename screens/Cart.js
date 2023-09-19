import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CartProduct from "../components/CartProduct";
import RemoveFromCartModal from "../components/RemoveFromCartModal";
import EmptyCart from "../components/EmptyCart";
import { removeFromCart } from "../store/actions";

export default function Cart() {
	const cartItems = useSelector((state) => state.cartReducer.items);
	const dispatch = useDispatch();
	const [itemToRemove, setItemToRemove] = useState({});
	const [isModalVisible, setIsModalVisible] = useState(false);

	const totalAmount = cartItems.reduce(
		(total, item) => total + item.price * item.qty,
		0
	);

	const navigation = useNavigation();

	function handleCheckout() {
		const name = "hello world";
		navigation.navigate("ShippingForm", {
			totalAmount,
			name,
		});
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
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<CartProduct
							item={item}
							onGetItemDetails={(item) => setItemToRemove(item)}
							onShowModal={() => setIsModalVisible(true)}
						/>
					)}
				/>
			</View>
			<TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
				<Text style={styles.checkoutButtonText}>Checkout 🛍️</Text>
				<Text style={styles.totalAmountText}>
					Total: {totalAmount.toFixed(2)} MYR
				</Text>
			</TouchableOpacity>
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
	flatListContainer: {},
	checkoutButton: {
		height: "10%",
		width: "80%",
		margin: 10,
		justifyContent: "center",
		alignSelf: "center",
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: "#71f0a8",
	},
	checkoutButtonText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	totalAmountText: {
		textAlign: "center",
		fontSize: 14,
	},
});
