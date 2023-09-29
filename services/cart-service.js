import axios from "axios";

export async function getCartAPI(userId) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.get(
				`http://10.0.2.2:3000/api/cart/${userId}`
			);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}

export async function updateCartAPI(userId, updatedCart) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.put(
				`http://10.0.2.2:3000/api/cart/update/${userId}`,
				{
					cartItems: updatedCart,
				}
			);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}
