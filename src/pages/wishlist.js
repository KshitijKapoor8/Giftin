import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar'
import {MDBView, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import presentBg from '../assets/present.jpg'
import axios from 'axios'
import { getAmazonPrice, getAmazonTitle, getHTML } from './scrape';
let parsedResponse = [];
let priceArray = [];
let titleArray = [];
let priceSet = [];
let titleSet = [];

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
    
    const [loading, setLoading] = useState(true)
    const [loadData, setLoadData] = useState(true);
    const [currentPrice, setCurrentPrice] = useState("");
    let currentId = localStorage.getItem("userToken");

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${currentId}`)
        .then((res) => {
            parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
            console.log(loading)
            scrapePage();
        })
        .catch((err) => {console.log(err)})

    }, [])

    if(loading)
        return null

    async function scrapePage() {
        if(loading)
        {
            console.log(parsedResponse)
            // parsedResponse.map(async (x, i) => {


            //     let html = await getHTML(x);
            //     await getAmazonPrice(html).then((res) => {
            //         priceArray.push(res)
            //         console.log(res)
            //         if(parsedResponse[parsedResponse.length-1] === x)
            //             setLoading(false)

            //     })
                
            //     await getAmazonTitle(html).then((res) => {
            //         titleArray.push(res)
            //     })
            // })

            for(let i = 0; i < parsedResponse.length; i++)
            {
                    let html = await getHTML(parsedResponse[i]);
                await getAmazonPrice(html).then((res) => {
                    priceArray.push(res)
                })
                
                await getAmazonTitle(html).then((res) => {
                    titleArray.push(res)
                })

                if(parsedResponse[parsedResponse.length-1] === parsedResponse[i])
                        setLoading(false)
        
            }


            console.log(priceArray)
            priceSet = [...new Set(priceArray)];
            titleSet = [...new Set(titleArray)];

            priceArray = Array.from(priceSet);
            titleArray = Array.from(titleSet)

            
        }
      }
        
      
    // for(let i = 0; i < parsedResponse.length; i++)
    // {
    //     let asin;
    //     var regex = RegExp("https://www.amazon.com/([//w-]+/)?(dp%7Cgp/product)/(//w+/)?(//w%7B10%7D)%22");

    //     if (parsedResponse[i].match(regex)) { 
    //         asin = parsedResponse[i].match(regex)[4];
    //     }
    //     console.log(parsedResponse[i])
    //     console.log(asin)
        
    // }
    
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

                                    parsedResponse.map((links, index) => {

                                        console.log("PRICES: "+priceArray)
                                        
                                            return(
                                                <tr style = {{color: 'white'}}>
                                                    <th>{index+1}</th>
                                                    <th>{titleArray[index]}</th>
                                                    <th>{priceArray[index]}</th>
                                                </tr>
                                                
                                            )
                                        
                                        
                                    })

                                    
                                }
                                </MDBTableBody>
                                          
                        </MDBTable>
                    </div>  
                </div>
            </MDBView>
    )
}
