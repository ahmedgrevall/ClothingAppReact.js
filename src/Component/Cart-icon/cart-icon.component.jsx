import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../Assets/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "./../../Redux/Cart/cart-actions";
import { selectCartItemsCount } from "../../Redux/Cart/cart.selectors";
import "./cart-icon.style.scss";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// cartItem.reduce(
//   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//   0
// ),
