import React from "react";
import Shop_data from "./shop_data";
import PreviewCollection from "./../../Component/PreviewCollection/previewCollection.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { Shop_data };
  }

  render() {
    const { Shop_data } = this.state;
    return (
      <div className="shop-page">
        {Shop_data.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
