import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import Home from '../pages/home'
export default function navbar() {
    return (
        <Navbar sticky = "top" bg = "none">
            <Navbar.Brand href = '/home' style = {{color:"black"}}>Giftin'</Navbar.Brand>

            <Nav className = "ml-auto">
                <Nav.Link href = '/login'>Login</Nav.Link>
                
                <Nav.Link href = '/signup'>Sign Up</Nav.Link>
                
            </Nav>
        </Navbar>
    )
}