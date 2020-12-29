import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Page from "./pages/page";
import Search from "./pages/search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wishlist from "./pages/wishlist";

import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/wishlist" component={Wishlist} exact />
        <Route path="/search" component={Search} exact />
      </Switch>
    </Router>
  );
}

export default App;
