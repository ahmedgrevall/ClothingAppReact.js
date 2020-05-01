import UserActionType from "./cart-actionTypes";

export const ToggleCartHidden = () => ({
  type: UserActionType.TOGGLE_DROPDOWN,
});

export const Add_Item = (item) => ({
  type: UserActionType.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: UserActionType.REMOVE_ITEM,
  payload: item,
});

export const Clear_Item_From_Cart = (item) => ({
  type: UserActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
