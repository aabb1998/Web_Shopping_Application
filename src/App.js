import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
// import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./Checkout";

function App() {
  //const [{ basket }, dispatch] = useStateValue();

  // useEffect is powerful
  // peice of code which runs based on a given condition

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user is logged in
  //     } else {
  //       // user is logged out
  //     }
  //   })
  // }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
