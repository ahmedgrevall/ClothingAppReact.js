import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./../Redux2/RootReducer";

const middleWare = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
