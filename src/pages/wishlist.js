import React from 'react'
import Navbar from '../components/navbar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBView } from 'mdbreact';
import presentBg from '../assets/present.jpg'


export default function Wishlist() {
    return (
        <Navbar renderContent = {renderContent()}/>
    )
}

function renderContent() {
    

    return (
            <MDBView src = {presentBg}>
                    <div>
                        Your Wishlist
                    </div>
            </MDBView>
    )
}
