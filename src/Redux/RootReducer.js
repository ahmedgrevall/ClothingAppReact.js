import { combineReducers } from "redux";
import UserReducer from "./User/user-reducer";
import CartReducer from "./Cart/cart-reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ShopReducer from "./Shop/shop.reducer";
import directoryReducer from "./Directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const RootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  shop: ShopReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, RootReducer);
