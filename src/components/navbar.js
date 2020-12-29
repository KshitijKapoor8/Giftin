import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
} from "mdbreact";

function LoggedIn() {
  if (localStorage.getItem("userToken") === "") {
    return (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to="/login" style={{ fontSize: "1.4rem" }}>
            login
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/signup" style={{ fontSize: "1.4rem" }}>
            sign up
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    );
  }

  return (
    <>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/wishlist">wishlist</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/search">search</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBBtn
            size="sm"
            color="red"
            style={{}}
            onClick={() => {
              localStorage.setItem("userToken", "");
              window.location.reload();
              console.log(localStorage.getItem("userToken"));
            }}
          >
            logout
          </MDBBtn>
        </MDBNavItem>
      </MDBNavbarNav>
    </>
  );
}

export default function Navbar(props) {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

<<<<<<< HEAD
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
            <MDBNavbarBrand href="/"><strong style = {{fontSize: '1.65rem'}}>giftin'</strong></MDBNavbarBrand>
            {!isWideEnough && (
              <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
            )}
            <MDBCollapse isOpen={collapse} navbar>
              
=======
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
          <MDBNavbarBrand href="/">
            <strong>giftin'</strong>
          </MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
          )}
          <MDBCollapse isOpen={collapse} navbar>
            <LoggedIn />
          </MDBCollapse>
        </MDBNavbar>
>>>>>>> a01095c1b416cb1b54325a56136ed69400ab9130

        {props.renderContent}
      </header>
    </div>
  );
}
