import { legacy_createStore as createStore, combineReducers } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
