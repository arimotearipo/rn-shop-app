import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	HomePage,
	ProductDetails,
	Cart,
	OrderConfirmation,
	PaymentForm,
	ShippingForm,
} from "./screens";
import store from "./store";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

const App = () => {
	return (
		// <SafeAreaView style={{ flex: 1 }}>
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Home" component={HomePage} />
					<Stack.Screen name="ProductDetails" component={ProductDetails} />
					<Stack.Screen name="Cart" component={Cart} />
					<Stack.Screen name="ShippingForm" component={ShippingForm} />
					<Stack.Screen name="PaymentForm" component={PaymentForm} />
					<Stack.Screen
						name="OrderConfirmation"
						component={OrderConfirmation}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
		// </SafeAreaView>
	);
};

export default App;
