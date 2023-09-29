import { updateCart, loadCart, removeFromCart } from "../slices/cartSlice";
import { updateCartAPI, getCartAPI } from "../../services";
import { printf } from "../../utils";

export function loadCartAction() {
	return async function (dispatch, getState) {
		try {
			const { userId } = getState().user;

			console.log(`Retrieving cart items...`);

			const response = await getCartAPI(userId);

			console.log("Cart items received...");

			dispatch(loadCart(response.data));
		} catch (error) {
			console.error(error);
		}
	};
}

export function updateCartAction(newItem) {
	return async function (dispatch, getState) {
		// Save the original state of cartItems
		const prevCartItems = getState().cart.items;

		// Call dispatch to update cartItems in redux store
		dispatch(updateCart(newItem));

		try {
			// Transform the updated cartItems array in redux store
			// into array of just productId and quantity in order to fit
			// the cartItem schema
			const updatedCartItems = getState().cart.items.map((item) => {
				return {
					product: item._id,
					quantity: item.quantity,
				};
			});
			const { userId } = getState().user;

			console.log(`Saving cart...`);

			// Save the updated cart items into database
			const response = await updateCartAPI(userId, updatedCartItems);

			console.log(response.message);
		} catch (error) {
			// If an error occurs when trying to save to database, reset the
			// cart item in redux store to its previous value
			dispatch(loadCart(prevCartItems));

			console.error(error);
		}
	};
}

export function removeFromCartAction(itemToRemove) {
	return async function (dispatch, getState) {
		// Save original state of prev cart items
		const prevCartItems = getState().cart.items;

		dispatch(removeFromCart(itemToRemove));

		printf("cartItems", getState().cart.items);

		try {
			const updatedCartItems = getState().cart.items.map((item) => {
				return {
					product: item._id,
					quantity: item.quantity,
				};
			});
			const { userId } = getState().user;

			console.log(`Saving cart...`);

			const response = await updateCartAPI(userId, updatedCartItems);

			console.log(response.message);
		} catch (error) {
			dispatch(loadCart(prevCartItems));

			console.error(error);
		}
	};
}
