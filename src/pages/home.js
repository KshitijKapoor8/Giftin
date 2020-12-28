import React, { useState } from "react";
import homebg from "../assets/homebg.jpg";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";

export default function Home(props) {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  return (
    <div>
      <header>
        <MDBNavbar
          color="bg-primary"
          fixed="top"
          dark
          expand="md"
          scrolling
          transparent
        >
          <MDBNavbarBrand href="/home">Giftin'</MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
          )}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/login">Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/signup">Sign Up</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBView src={homebg}>
          <MDBContainer>
            <div style={{ fontSize: 36, color: "white" }}>
              <strong>Making Gifting Easy</strong>
            </div>
          </MDBContainer>
        </MDBView>
      </header>
    </div>
  );
}
