import { findIndex, remove } from "lodash";
import * as types from "../actions/types";

const initialState = {
	items: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.INITIALIZE_CART:
			return {
				items: action.payload,
			};
		case types.ADD_TO_CART:
			const indexToAdd = findIndex(state.items, ["id", action.payload.id]);

			if (indexToAdd != -1) {
				const updatedItems = [...state.items];
				updatedItems[indexToAdd].qty += action.payload.qty;

				return {
					...state,
					items: updatedItems,
				};
			}
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case types.REMOVE_FROM_CART:
			const indexToRemove = findIndex(state.items, ["id", action.payload.id]);

			const updatedItems = [...state.items];

			if (updatedItems[indexToRemove].qty === action.payload.qty) {
				remove(updatedItems, (item) => item.id === action.payload.id);
			} else {
				updatedItems[indexToRemove].qty -= action.payload.qty;
			}

			return {
				...state,
				items: updatedItems,
			};
		default:
			return state;
	}
};

export default cartReducer;
