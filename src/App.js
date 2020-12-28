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
      <Navbar/>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
