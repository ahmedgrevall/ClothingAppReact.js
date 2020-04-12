import { combineReducers } from "redux";
import UserReducer from "./User/user-reducer";
import CartReducer from "./Cart/cart-reducers";
const RootReducer = {
  user: UserReducer,
  cart: CartReducer,
};

export default combineReducers(RootReducer);
