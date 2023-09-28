import { createSlice } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";

const initialState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		initializeCart: (state, action) => {
			state.items = action.payload;
		},
		addToCart: (state, action) => {
			const indexToAdd = findIndex(state.items, ["id", action.payload.id]);

			// If item is already existing
			if (indexToAdd != -1) {
				const updatedItems = [...state.items];
				updatedItems[indexToAdd].qty += action.payload.qty;

				state.items = updatedItems;
			} else {
				state.items = [...state.items, action.payload];
			}
		},
		removeFromCart: (state, action) => {
			const indexToRemove = findIndex(state.items, ["id", action.payload.id]);

			const updatedItems = [...state.items];

			if (updatedItems[indexToRemove].qty === action.payload.qty) {
				remove(updatedItems, (item) => item.id === action.payload.id);
			} else {
				updatedItems[indexToRemove].qty -= action.payload.qty;
			}

			state.items = updatedItems;
		},
	},
});

const { actions, reducer } = cartSlice;
export const { initializeCart, addToCart, removeFromCart } = actions;
export { reducer };
