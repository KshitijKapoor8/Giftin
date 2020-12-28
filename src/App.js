<<<<<<< HEAD

import Home from './pages/home'
import Navbar from './components/navbar'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Home/>
    </div>
=======
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
>>>>>>> 3a6d0106ddcfb32889937efa0e9acf5bde08e178
  );
}

export default App;
