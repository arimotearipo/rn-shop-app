import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomTouchableOpacity } from "./customized-components";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../rtk-store/slices/userSlice";

export function DrawerContent({ navigation }) {
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logoutUser());
		navigation.navigate("Login");
	}

	function handleGoToCart() {
		navigation.navigate("Cart");
	}

	function handleGoToShop() {
		navigation.navigate("ProductList");
	}

	return (
		<DrawerContentScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>RN Shop App</Text>
			</View>
			<CustomTouchableOpacity
				style={styles.buttons}
				textStyle={styles.texts}
				text={"Shop"}
				onPress={handleGoToShop}
			/>
			<CustomTouchableOpacity
				style={styles.buttons}
				textStyle={styles.texts}
				text={"Cart"}
				onPress={handleGoToCart}
			/>
			<CustomTouchableOpacity
				style={styles.buttons}
				textStyle={styles.texts}
				text={"Logout"}
				onPress={handleLogout}
			/>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		backgroundColor: "#007bff",
		padding: 16,
	},
	headerText: {
		color: "white",
		fontSize: 20,
	},
	buttons: {
		marginTop: 16,
		marginLeft: 16,
	},
	texts: {
		color: "#007bff",
		fontSize: 16,
	},
});
