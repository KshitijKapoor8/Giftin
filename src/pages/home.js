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

import Navbar from '../components/navbar';
import { Nav } from "react-bootstrap";

export default function Home(props) {
 

  return (
<<<<<<< HEAD
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
=======
    <Navbar renderContent = {renderContent()}/>
  );
}
>>>>>>> 8491bbf3c8048f4bfa3f3784b848a8a59e612206

function renderContent()
{
    return(
        <MDBView src={homebg}>
          <MDBContainer>
            <div style={{ fontSize: 36, color: "white" }}>
              <strong>Making Gifting Easy</strong>
            </div>
          </MDBContainer>
        </MDBView>
    );
}



