import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "./../Firebase/Firebase";
import { ReactComponent as Logo } from "./../../Assets/crown.svg";

const Header = (currentUser) => {
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
      </div>
    </div>
  );
};

export default Header;
