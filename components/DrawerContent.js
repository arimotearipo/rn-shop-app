import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CustomTouchableOpacity } from "./customized-components";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../rtk-store/slices/userSlice";
import { Icon } from "@rneui/base";

export function DrawerContent({ navigation }) {
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logoutUser());
		navigation.navigate("Login");
	}

	function handleCloseDrawer() {
		navigation.closeDrawer();
	}

	return (
		<DrawerContentScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>RN Shop App</Text>
				<TouchableOpacity onPress={handleCloseDrawer}>
					<Icon name="menufold" type="antdesign" size={32} />
				</TouchableOpacity>
			</View>
			<CustomTouchableOpacity
				style={styles.buttons}
				textStyle={styles.texts}
				text={"Shop"}
				onPress={() => navigation.navigate("ProductList")}
			/>
			<CustomTouchableOpacity
				style={styles.buttons}
				textStyle={styles.texts}
				text={"Cart"}
				onPress={() => navigation.navigate("Cart")}
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
	container: {
		backgroundColor: "#ece4ed",
	},
	header: {
		backgroundColor: "#e1bce6",
		padding: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		verticalAlign: "center",
	},
	headerText: {
		color: "black",
		fontSize: 20,
		fontWeight: "bold",
	},
	buttons: {
		marginTop: 16,
		marginLeft: 16,
	},
	texts: {
		color: "black",
		fontSize: 16,
	},
});
