import React, { useState } from "react";
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
  MDBBtn,
} from "mdbreact";
import { render } from "react-dom";

<<<<<<< HEAD
function LoggedIn() {
  if (localStorage.getItem("userToken") === "") {
    return (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to="/login">login</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/signup">sign up</MDBNavLink>
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
              window.location.refresh();
              console.log(localStorage.getItem("userToken"));
            }}
          >
            logout
          </MDBBtn>
        </MDBNavItem>
      </MDBNavbarNav>
    </>
  );
=======
function LoggedIn(){
  if(localStorage.getItem("userToken") === "")
  {
    return(
          <MDBNavbarNav right>
                <MDBNavItem>     
                  <MDBNavLink to="/login" style = {{fontSize: '1.4rem'}}>login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup" style = {{fontSize: '1.4rem'}}>sign up</MDBNavLink>
                </MDBNavItem>
          </MDBNavbarNav>
        
    )
  }

  return (
<<<<<<< HEAD

  
    <div>
=======
      <>
>>>>>>> 5b1ce3450595d07840c68f3082a969ccf3e9d929
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
                  <MDBBtn size = "sm" color = "red" style = {{}}onClick = {() => {
                    localStorage.setItem("userToken", "")
                    window.location.reload();
                    console.log(localStorage.getItem("userToken"))
                }}>logout</MDBBtn>
                </MDBNavItem>
            </MDBNavbarNav>
      </>
      
  )
>>>>>>> 2cd0529cc1356dcfd81c5ea07007a0bb1f233d78
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
<<<<<<< HEAD
            <MDBNavbarBrand href="/"><strong style = {{fontSize: '1.65rem'}}>giftin'</strong></MDBNavbarBrand>
=======
            <MDBNavbarBrand href="/"><strong>giftin'</strong></MDBNavbarBrand>
>>>>>>> 5b1ce3450595d07840c68f3082a969ccf3e9d929
            {!isWideEnough && (
              <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
            )}
            <MDBCollapse isOpen={collapse} navbar>
              
>>>>>>> 2cd0529cc1356dcfd81c5ea07007a0bb1f233d78

        {props.renderContent}
      </header>
    </div>
  );
}
