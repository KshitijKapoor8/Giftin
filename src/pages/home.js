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
    <Navbar renderContent = {renderContent()}/>
  );
}

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



