import React from 'react';
import {MDBNavbar, MDBNav, MDBNavbarBrand, MDBNavLink} from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';

export default function navbar() {
    return (
    <Router>
        <MDBNavbar scrolling transparent>
            <MDBNavbarBrand href = '/home' style = {{color:"black"}}>Giftin'</MDBNavbarBrand>

            <MDBNav className = "ml-auto">
                <MDBNavLink to = '/login'>Login</MDBNavLink>

                <MDBNavLink to = '/signup'>Sign Up</MDBNavLink>
                
            </MDBNav>
        </MDBNavbar>
    </Router>
    )
}