import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={Signup} exact/>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
