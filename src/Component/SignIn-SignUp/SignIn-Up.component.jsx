import React from "react";
import "./SignIn-Up.style.scss";
import SignIn from "./../SignIn/SignIn.component";
import SignUp from "./../SignUp/SignUp.component";

const SignInUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
