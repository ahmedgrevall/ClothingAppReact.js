import React from "react";
import { connect } from "react-redux";
import CustomButton from "./../Custom Button/CustomButton.component";
import CartItem from "./../CartItem/cartItem.component";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../Redux/Cart/cart.selectors";
import { ToggleCartHidden } from "./../../Redux/Cart/cart-actions";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItem, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItem.length ? (
      <div className="cart-items">
        {cartItem.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    ) : (
      <div className="empty-message">Your Cart is Empty</div>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItem: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
