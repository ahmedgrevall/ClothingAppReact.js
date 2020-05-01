import UserActionType from "./cart-actionTypes";
import { addItemsToCart, removeItemFromCart } from "./cart-utilts";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case UserActionType.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemsToCart(state.cartItem, action.payload),
      };
    case UserActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItem, action.payload),
      };

    case UserActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
