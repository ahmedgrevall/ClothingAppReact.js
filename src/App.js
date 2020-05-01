import React from "react";
import HomePage from "./Pages/HomePage/home.component";
import ShopPage from "./Pages/Shop/shop.component";
import CheckoutPage from "./Pages/Checkout/checkout.component";
import SignInUp from "./Component/SignIn-SignUp/SignIn-Up.component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/header.component";
import { auth, createUserProfileDocument } from "./Component/Firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user.actions";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
              }
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
