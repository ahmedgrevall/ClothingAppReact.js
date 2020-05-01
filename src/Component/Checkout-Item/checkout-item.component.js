import React from "react";
import { connect } from "react-redux";
import "./checkout-item.style.scss";
import {
  Clear_Item_From_Cart,
  Add_Item,
  removeItem,
} from "./../../Redux/Cart/cart-actions";

const Checkout = ({ ClearItem, Add_Item, removeItem, cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => Add_Item(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => ClearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ClearItem: (item) => dispatch(Clear_Item_From_Cart(item)),
  Add_Item: (item) => dispatch(Add_Item(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(Checkout);
