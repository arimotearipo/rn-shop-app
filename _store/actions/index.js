/**
 * DEPRECATED. REDUX STORE HAS BEEN MIGRATED
 * TO USE THE REDUX TOOLKIT
 */

import * as types from "./types";

export function initializeCart(payload) {
	return {
		type: types.INITIALIZE_CART,
		payload,
	};
}
export function addToCart(payload) {
	return {
		type: types.ADD_TO_CART,
		payload,
	};
}

export function removeFromCart(payload) {
	return {
		type: types.REMOVE_FROM_CART,
		payload,
	};
}

export function loginUser(payload) {
	return {
		type: types.LOGIN_USER,
		payload,
	};
}

export function logoutUser(payload) {
	return {
		type: types.LOGOUT_USER,
		payload,
	};
}
