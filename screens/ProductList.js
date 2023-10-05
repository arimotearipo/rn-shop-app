import { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../components";
import { allProductsAPI } from "../services";

export default function HomePage() {
	const [products, setProducts] = useState([]);
	const navigation = useNavigation();
	const windowWidth = useWindowDimensions().width;
	const numColumns = 3;
	const itemWidth = windowWidth / numColumns - 4; // Deduct 4 because each item will have margin of 2 on each side

	useEffect(() => {
		allProductsAPI()
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleProductPress = (product) => {
		navigation.navigate("ProductDetails", { product });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Product List</Text>
			{/* Flatlist */}
			<View style={styles.flatListContainer}>
				<FlatList
					data={products}
					numColumns={3}
					keyExtractor={(item) => item._id}
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
		backgroundColor: "#eae1eb",
		alignItems: "center",
	},
	header: {
		fontWeight: "bold",
		fontSize: 24,
		marginBottom: 20,
	},
	flatListContainer: {
		flex: 1,
		justifyContent: "center",
	},
	goToCartButton: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#7cd694",
	},
	logoutButton: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#61c0ff",
	},
	buttonText: {
		fontWeight: "bold",
		fontSize: 20,
	},
});
