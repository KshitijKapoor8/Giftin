import React from 'react'
import Navbar from '../components/navbar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBView, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import presentBg from '../assets/present.jpg'
import axios from 'axios'


export default function Wishlist() {
    return (
        <Navbar renderContent = {renderContent()}/>
    )
}

function renderContent() {

    const userLinks = [];
    let currentId = localStorage.getItem("userToken");
        axios.get('http://localhost:5000/'+currentId)
        .then((res) => {
            userLinks.push(res.data.wishlist);
        })
    .catch((err) => {console.log(err)})

    return (
            <MDBView style = {{display: 'flex', flexDirection: 'vertical', justifyContent:'center'}}src = {presentBg}>
                    <div style = {{flex: 1, display: 'flex', justifyContent: 'center', paddingTop: '7rem', height:'100%'}}>
                        <h1 style = {{color: 'white'}}>
                            <strong>your</strong> wishlist
                        </h1>                        
                    </div>

                    <div style = {{flex: 1}}>
                        <MDBTable borderless>
                                <MDBTableHead>
                                    <tr style = {{color: 'white'}}>
                                        <th>#</th>
                                        <th>title</th>
                                        <th>price</th>
                                        <th></th>
                                    </tr>
                                </MDBTableHead>
                        </MDBTable>
                    </div>  
            </MDBView>
    )
}
