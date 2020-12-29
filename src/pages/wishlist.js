import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar'
import {MDBView, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import presentBg from '../assets/present.jpg'
import axios from 'axios'


export default function Wishlist() {

    if(localStorage.getItem("userToken") === "")
    {
        window.location = '/'
    }
    return (
        <Navbar renderContent = {RenderContent()}/>
    )
}

function RenderContent() {
    let parsedResponse = [];
    const [loading, setLoading] = useState(true)
    let currentId = localStorage.getItem("userToken");

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${currentId}`)
        .then((res) => {
            parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
            setLoading(false)
        })
        .catch((err) => {console.log(err)})

    }, [])

    if(loading)
    return null;

        
    return (
            <MDBView style = {{display: 'flex', flexDirection: 'vertical', justifyContent:'center'}}src = {presentBg}>

                <div>
                    <div style = {{flex: 1, display: 'flex', justifyContent: 'center', paddingTop: '7rem', height:'100%'}}>
                        <h1 style = {{color: 'white'}}>
                            <strong>your</strong> wishlist
                        </h1>                        
                    </div>

                    <div style = {{flex: 1, display: 'flex', justifyContent: 'center', height:'100%'}}>
                        <MDBTable borderless>
                                <MDBTableHead>
                                    <tr style = {{color: 'white'}}>
                                        <th>#</th>
                                        <th>title</th>
                                        <th>price</th>
                                    </tr>
                                </MDBTableHead>

                                <MDBTableBody>
                                {
                                    parsedResponse.map(links => {
                                        console.log(links)
                                        
                                    })
                                }
                                </MDBTableBody>
                                

                               
                        </MDBTable>
                    </div>  
                </div>
            </MDBView>
    )
}
