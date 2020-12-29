import React, {useState} from 'react'
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
import { render } from 'react-dom';

export default function Navbar(props) {
  
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
            <MDBNavbarBrand href="/">Giftin'</MDBNavbarBrand>
            {!isWideEnough && (
              <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
            )}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/wishlist">Wishlist</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/search">Search</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                </MDBNavItem>
                
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
  
        {props.renderContent}
        
            
        </header>
      </div>
    )
}
