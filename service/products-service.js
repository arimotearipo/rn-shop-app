import axios from "axios";

export async function allProductsAPI() {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.get("http://10.0.2.2:3000/api/products/");
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}

export async function productAPI(productId) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.get(
				`http://10.0.2.2:3000/api/products/${productId}`
			);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}
