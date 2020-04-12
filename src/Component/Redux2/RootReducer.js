//that Combines all the States Together
import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
