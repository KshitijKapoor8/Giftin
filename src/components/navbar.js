import React from "react";
import { MDBNavbar, MDBNav, MDBNavbarBrand, MDBNavLink } from "mdbreact";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <Router>
      <MDBNavbar scrolling transparent>
        <MDBNavbarBrand href="/" style={{ color: "black" }}>
          Giftin'
        </MDBNavbarBrand>

        <MDBNav className="ml-auto">
          <MDBNavLink to="/login">Login</MDBNavLink>

          <MDBNavLink to="/signup">Sign Up</MDBNavLink>
        </MDBNav>
      </MDBNavbar>
    </Router>
  );
}
