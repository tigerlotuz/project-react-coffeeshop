import cartReducer from "./cart";
import cartCheckOutReducer from "./cartCheckout";
import currentUserReducer from "./currentUser";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartReducer,
  cartCheckOutReducer,
  currentUserReducer,
});

export default allReducers;
