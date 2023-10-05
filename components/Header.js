import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { useRoute } from "@react-navigation/native";

const ICON_SIZE = 32;

export function Header({ navigation }) {
	const route = useRoute();

	function handleOpenDrawer() {
		navigation.openDrawer();
	}

	function handleGoToCart() {
		navigation.navigate("Cart");
	}

	function handleGoToShop() {
		navigation.navigate("ProductList");
	}

	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={handleOpenDrawer}>
				<Icon name="menu" size={ICON_SIZE} />
			</TouchableOpacity>

			{/* Cart button is only shown on product list screen */}
			{route.name === "ProductList" && (
				<TouchableOpacity onPress={handleGoToCart}>
					<Icon name="shopping-cart" size={ICON_SIZE} />
				</TouchableOpacity>
			)}

			{route.name === "Cart" && (
				<TouchableOpacity onPress={handleGoToShop}>
					<Icon name="store" size={ICON_SIZE} />
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		paddingTop: 40,
		paddingHorizontal: 20,
		backgroundColor: "#eae1eb",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
