import UserActionType from "./cart-actionTypes";

const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default CartReducer;
