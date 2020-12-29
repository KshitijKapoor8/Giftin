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
        <MDBView src={homebg} style = {{justifyContent: 'center',  alignItems: 'center', width: '100%', height: '100%'}}>
            <MDBMask className="flex-center" >
              <p className="white-text" style={{fontSize: 50, paddingRight: '35%', paddingBottom: '8%'}}>make gifting easy</p>
            </MDBMask>
        </MDBView>
    );
}



