import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "./../Firebase/Firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/cart.selectors";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import CartDropDown from "./../Cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "./../../Assets/crown.svg";
import CartIcon from "./../Cart-icon/cart-icon.component";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="Logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="options" to="/shop">
          Shop
        </Link>
        <Link className="options" to="/">
          Contact
        </Link>
        <Link className="options" to="/">
          {" "}
          Contact{" "}
        </Link>
        {currentUser ? (
          <Link className="options" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="options" to="/signIn">
            SignIn
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? <CartDropDown /> : ""}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
