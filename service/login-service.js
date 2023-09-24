import axios from "axios";

export async function loginAPI({ username, password }) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post(
				"http://10.0.2.2:3000/api/users/login",
				{
					username,
					password,
				}
			);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
}
