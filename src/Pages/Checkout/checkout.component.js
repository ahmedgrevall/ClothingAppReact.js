import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../Redux/Cart/cart.selectors";
import CheckOut from "./../../Component/Checkout-Item/checkout-item.component";
import { ToggleCartHidden } from "./../../Redux/Cart/cart-actions";
import StripeCheckoutButton from "../../Component/Stripe-button/stripe-button.component";
import "./checkout.style.scss";

const Checkout = ({ cartItem, totalValue }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((cartItem) => (
        <CheckOut key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${totalValue} </span>
      </div>
      <StripeCheckoutButton price={totalValue} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
  totalValue: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
