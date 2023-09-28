/**
 * DEPRECATED
 */

import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	cartReducer,
	productReducer,
	userReducer,
});

export default rootReducer;
