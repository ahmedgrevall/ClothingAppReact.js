import React from "react";
import CollectionItem from "./../Collection Item/collectionItem.component.jsx";
import "./previewCollection.style.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemsProps }) => (
          <CollectionItem key={id} {...otherItemsProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
