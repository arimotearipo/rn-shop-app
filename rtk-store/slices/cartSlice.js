import { createSlice } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { printf } from "../../utils";

const initialState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		loadCart: (state, action) => {
			state.items = action.payload;
		},
		addToCart: (state, action) => {
			const indexToAdd = findIndex(state.items, ["_id", action.payload._id]);

			// If item is already existing
			if (indexToAdd != -1) {
				const updatedItems = [...state.items];
				updatedItems[indexToAdd].quantity += action.payload.quantity;

				state.items = updatedItems;
			} else {
				state.items = [...state.items, action.payload];
			}
		},
		removeFromCart: (state, action) => {
			const indexToRemove = findIndex(state.items, ["_id", action.payload._id]);

			const updatedItems = [...state.items];

			// If user clicks remove all
			if (updatedItems[indexToRemove].quantity === action.payload.quantity) {
				remove(updatedItems, (item) => item._id === action.payload._id);
			} else {
				updatedItems[indexToRemove].quantity -= action.payload.quantity;
			}

			state.items = updatedItems;
		},
	},
});

const { actions, reducer } = cartSlice;
export const { loadCart, addToCart, removeFromCart } = actions;
export { reducer };