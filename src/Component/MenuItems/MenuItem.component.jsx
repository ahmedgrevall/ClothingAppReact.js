import React from "react";
import "./MenuItem.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  history,
  imageUrl,
  size,
  linkUrl,
  match,
}) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
