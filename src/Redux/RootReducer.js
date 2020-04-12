import { combineReducers } from "redux";
import UserReducer from "./User/user-reducer";

const RootReducer = {
  user: UserReducer,
};

export default combineReducers(RootReducer);
