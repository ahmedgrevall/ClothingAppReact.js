import React from "react";
import FormInput from "./../FormInput/FormInput.component";
import CustomButton from "./../Custom Button/CustomButton.component";
import { auth } from "./../Firebase/Firebase";
import { signInWithGoogle } from "./../Firebase/Firebase";
import "./SignIn.style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an Account</h1>
        <span>SignIn with Your Email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            type="email"
            required
          />
          <label>Password</label>
          <FormInput
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            type="password"
            required
          />

          <CustomButton type="submit" value="Submit form">
            SignIn
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SignIn with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
