import { loginAPI } from "../../services";
import { loginUser } from "../slices/userSlice";

export function loginAction({ username, password }) {
	return async function (dispatch) {
		try {
			console.log(`Trying to login with username: ${username}`);

			const response = await loginAPI({ username, password });

			console.log(
				`Logged in\nusername: ${response.data.username}\nid: ${response.data._id}`
			);

			dispatch(
				loginUser({
					username: response.data.username,
					userId: response.data._id,
				})
			);
		} catch (error) {
			console.error("client", error);
		}
	};
}
