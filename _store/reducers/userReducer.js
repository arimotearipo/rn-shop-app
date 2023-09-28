import * as types from "../actions/types";

const initialState = {
	username: "",
	userId: "",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_USER:
			return {
				username: action.payload.username,
				userId: action.payload.userId,
			};
		case types.LOGOUT_USER:
			return initialState;
		default:
			return initialState;
	}
};

export default userReducer;
