import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./slices/cartSlice";
import { reducer as userReducer } from "./slices/userSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
	},
});

export default store;
