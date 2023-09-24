import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	API,
	Login,
	Signup,
	HomePage,
	ProductDetails,
	Cart,
	OrderConfirmation,
	PaymentForm,
	ShippingForm,
} from "./screens";
import store from "./store";

const Stack = createStackNavigator();

const App = () => {
	return (
		// <SafeAreaView style={{ flex: 1 }}>
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={{ headerShown: false }}
				>
					{/* <Stack.Screen name="API" component={API} /> */}
					<Stack.Screen name="Home" component={HomePage} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Signup" component={Signup} />
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
