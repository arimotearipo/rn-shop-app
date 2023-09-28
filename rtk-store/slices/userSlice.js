import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: "",
	username: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.userId = action.payload.userId;
			state.username = action.payload.username;
		},
		logoutUser: (state, _action) => {
			state.userId = initialState.userId;
			state.username = initialState.username;
		},
	},
});

const { actions, reducer } = userSlice;
export const { loginUser, logoutUser } = actions;
export { reducer };
