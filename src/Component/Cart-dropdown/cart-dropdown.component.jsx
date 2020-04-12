import React from "react";
import CustomButton from "./../Custom Button/CustomButton.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  </div>
);

export default CartDropDown;
