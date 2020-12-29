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
  if (localStorage.getItem("userToken") === "") {
    window.location = "/";
  }
  return <Navbar renderContent={RenderContent()} />;
}


  
function RenderContent() {
    
    const [loading, setLoading] = useState(true)
    const [loadData, setLoadData] = useState(true);
    let currentId = localStorage.getItem("userToken");

    async function scrapePage() {
        if(loading)
            return null;
        for(let i = 0; i < parsedResponse.length; i++)
        {
           

            let html = await getHTML(parsedResponse[i]);
            getAmazonPrice(html).then((res) => {
                priceArray.push(res)
            })

            getAmazonTitle(html).then((res) => {
                titleArray.push(res)
            })
            

        }

        priceSet = [...new Set(priceArray)];
        titleSet = [...new Set(titleArray)];

        setLoadData(false)
                console.log(priceSet)

      }

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${currentId}`)
        .then((res) => {
            parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
            setLoading(false)
        })
        .catch((err) => {console.log(err)})

    }, [])

    scrapePage();

    if(loading)
    return null;

        
    return (
            <MDBView style = {{display: 'flex', flexDirection: 'vertical', justifyContent:'center'}}src = {presentBg}>

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + currentId)
      .then((res) => {
        parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MDBView
      style={{
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
      }}
      src={presentBg}
    >
      <div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            paddingTop: "7rem",
            height: "100%",
          }}
        >
          <h1 style={{ color: "white" }}>
            <strong>your</strong> wishlist
          </h1>
        </div>

<<<<<<< HEAD
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <MDBTable borderless>
            <MDBTableHead>
              <tr style={{ color: "white" }}>
                <th>Link</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </MDBTableHead>

            {parsedResponse.map((index) => {
              return (
                <MDBTableBody key={index}>
                  <tr style={{ color: "white" }}>
                    <th>{index}</th>
                    <th>title</th>
                    <th>price</th>
                  </tr>
                </MDBTableBody>
              );
              setReload(true);
            })}
          </MDBTable>
        </div>
      </div>
    </MDBView>
  );
=======
                                <MDBTableBody>
                                {

                                    parsedResponse.map((links, index) => {
                                        
                                        if(setLoadData)
                                        return null;


                                        return(
                                        <tr style = {{color: 'white'}}>
                                            <th>{links}</th>
                                            <th>{priceSet[index]}</th>
                                            <th>price</th>
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
>>>>>>> 2cd0529cc1356dcfd81c5ea07007a0bb1f233d78
}
