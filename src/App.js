import React from "react";
import HomePage from "./Pages/HomePage/home.component";
import ShopPage from "./Pages/Shop/shop.component";
import SignInUp from "./Component/SignIn-SignUp/SignIn-Up.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/header.component";
import { auth, createUserProfileDocument } from "./Component/Firebase/Firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
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
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInUp} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
