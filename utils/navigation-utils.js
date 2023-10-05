import { useNavigation } from "@react-navigation/native";

export function handleGoBack() {
	const navigation = useNavigation();
	navigation.goBack();
}

export function handleGoToShop() {
	const navigation = useNavigation();
	navigation.navigate("ProductList");
}

export function handleGoToLogin() {
	const navigation = useNavigation();
	navigation.navigate("Login");
}

export function handleGoToCart() {
	const navigation = useNavigation();
	navigation.navigate("Cart");
}

export function handleGoToSignup() {
	const navigation = useNavigation();
	navigation.navigate("Signup");
}
