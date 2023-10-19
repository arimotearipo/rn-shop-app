import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	API,
	Login,
	Signup,
	ProductList,
	ProductDetails,
	Cart,
	OrderConfirmation,
	PaymentForm,
	ShippingForm,
} from "./screens";
import { DrawerContent, ScreenHeader, StripePayment } from "./components";
import store from "./rtk-store/store";

const Stack = createStackNavigator();

function StackNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="StripePayment"
			screenOptions={{
				header: ({ navigation }) => <ScreenHeader navigation={navigation} />,
			}}
		>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Signup"
				component={Signup}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="ProductList" component={ProductList} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
			<Stack.Screen name="Cart" component={Cart} />
			<Stack.Screen name="ShippingForm" component={ShippingForm} />
			<Stack.Screen name="PaymentForm" component={PaymentForm} />
			<Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
			<Stack.Screen name="StripePayment" component={StripePayment} />
		</Stack.Navigator>
	);
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			drawerContent={({ navigation }) => (
				<DrawerContent navigation={navigation} />
			)}
			screenOptions={{ headerShown: false }}
		>
			<Drawer.Screen name="Home" component={StackNavigator} />
		</Drawer.Navigator>
	);
}

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</Provider>
	);
}

export default App;
