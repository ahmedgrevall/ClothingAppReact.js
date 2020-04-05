import React from "react";
import FormInput from "./../FormInput/FormInput.component";
import CustomButton from "./../Custom Button/CustomButton.component";
import { auth, createUserProfileDocument } from "./../Firebase/Firebase";
import "./SignUp.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      confirmPassword: "",
      email: "",
      displayName: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password did't matched");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        password: "",
        confirmPassword: "",
        email: "",
        displayName: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
  //     const { displayName, email, password, confirmPassword } = this.state;
  //     return (
  //       <div className="sign-up">
  //         <h2 className="title"> I Do Not have an Account </h2>
  //         <span>SignUp with your Email and Password</span>
  //         <form className="sign-up-form" submit={this.handleSubmit}>
  //           <FormInput
  //             type="text"
  //             name="displayName"
  //             value={displayName}
  //             onChange={this.handleChange}
  //             label="Display Name"
  //             required
  //           />
  //           <FormInput
  //             type="email"
  //             name="email"
  //             value={email}
  //             onChange={this.handleChange}
  //             label="Email"
  //             required
  //           />
  //           <FormInput
  //             type="password"
  //             name="password"
  //             value={password}
  //             onChange={this.handleChange}
  //             label="Password"
  //             required
  //           />
  //           <FormInput
  //             type="password"
  //             name="confirmPassword"
  //             value={confirmPassword}
  //             onChange={this.handleChange}
  //             label="Confirm Password"
  //             required
  //           />
  //           <CustomButton type="submit"> SignUp </CustomButton>
  //         </form>
  //       </div>
  //     );
  //   }
}

export default SignUp;
