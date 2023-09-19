import React from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Product from "../components/Product";

export default function HomePage() {
	const products = useSelector((state) => state.productReducer.products);
	const navigation = useNavigation();
	const windowWidth = useWindowDimensions().width;
	const numColumns = 3;
	const itemWidth = windowWidth / numColumns - 4; // Deduct 4 because each item will have margin of 2 on each side

	const handleProductPress = (product) => {
		navigation.navigate("ProductDetails", { product });
	};

	const handleSwipeRight = ({ nativeEvent }) => {
		if (nativeEvent.state === 5) {
			navigation.navigate("Cart", {
				animation: "slide_from_right",
			});
		}
	};

	const handleGoToCart = () => {
		navigation.navigate("Cart");
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>Product List</Text>
				</View>
				<TouchableOpacity
					style={styles.goToCartButton}
					onPress={() => handleGoToCart()}
				>
					<Text style={styles.goToCartText}>Go To Cart 🛒</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.flatListContainer}>
				<FlatList
					data={products}
					numColumns={3}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => handleProductPress(item)}>
							<Product item={item} itemWidth={itemWidth} />
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: "#eae1eb",
	},
	headerContainer: {
		height: 90,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
		verticalAlign: "middle",
	},
	titleContainer: {
		padding: 10,
	},
	titleText: {
		height: "auto",
		fontWeight: "bold",
		fontSize: 20,
	},
	flatListContainer: {
		justifyContent: "center",
	},
	goToCartButton: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#7cd694",
	},
	goToCartText: {
		fontWeight: "bold",
		fontSize: 20,
	},
});
