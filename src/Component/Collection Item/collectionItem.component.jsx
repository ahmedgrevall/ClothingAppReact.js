import React from "react";
import CustomButton from "./../Custom Button/CustomButton.component";
import "./collectionItem.style.scss";
import { connect } from "react-redux";
import { Add_Item } from "./../../Redux/Cart/cart-actions";

const CollectionItem = ({ item, Add_Item }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => Add_Item(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  Add_Item: (item) => dispatch(Add_Item(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
