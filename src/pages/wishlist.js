import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MDBView, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from "mdbreact";
import presentBg from "../assets/present.jpg";
import axios from "axios";
import { getAmazonPrice, getAmazonTitle, getHTML } from "./scrape";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
  const [loading, setLoading] = useState(true);
  const [loadData, setLoadData] = useState(true);
  const [currentPrice, setCurrentPrice] = useState("");
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState("");

  let currentId = localStorage.getItem("userToken");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${currentId}`)
      .then((res) => {
        parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
        scrapePage();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading)
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
          <h1
            style={{
              color: "white",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              paddingTop: "7rem",
              height: "100%",
            }}
          >
            <span><span style = {{fontWeight: 'bold'}}>your</span> wishlist</span>
          </h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        </div>
      </MDBView>
    );

  async function scrapePage() {
    if (loading) {
      console.log(parsedResponse);

      if (parsedResponse.length === 0)
        setLoading(false);
      for (let i = 0; i < parsedResponse.length; i++) {
        let html = await getHTML(parsedResponse[i]);
        await getAmazonPrice(html).then((res) => {
          priceArray.push(res);
        });

        await getAmazonTitle(html).then((res) => {
          titleArray.push(res);
        });

        if (parsedResponse[parsedResponse.length - 1] === parsedResponse[i])
          setLoading(false);
      }

      console.log(priceArray);
      priceSet = [...new Set(priceArray)];
      titleSet = [...new Set(titleArray)];

      priceArray = Array.from(priceSet);
      titleArray = Array.from(titleSet);
    }
  }

  if (parsedResponse.length !== 0)
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

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <MDBTable borderless>
            <MDBTableHead >
              <tr style={{ color: "white", paddingLeft: '20%' }}>
                <th>#</th>
                <th>title</th>
                <th>price</th>
                <th></th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {parsedResponse.map((links, index) => {
                console.log("PRICES: " + priceArray);

                return (
                  <tr style={{ color: "white" }}>
                    <th>{index + 1}</th>
                    <th>
                      <a
                        style={{ color: "white" }}
                        target="_blank"
                        href={links}
                      >
                        {titleArray[index]}
                      </a>
                    </th>
                    <th>{priceArray[index]}</th>
                    <th><div onClick = {() => {
                      const indexx = parsedResponse.indexOf(parsedResponse[index]);
                      if (indexx > -1) {
                        parsedResponse.splice(indexx, 1);
                      }
                      axios.post('http://localhost:5000/users/update/'+localStorage.getItem("userToken"), {"wishlist": parsedResponse})
                        .then(() => {window.location.reload()})
                        .catch((err) => {console.log(err)})                     
                    }}><i size = "70%" color = "#D32F2F" class="fas fa-trash"></i></div></th>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </div>
        <div style = {{justifyContent: 'center', display: 'flex'}}><MDBBtn onClick = {() => {
          setModal(!modal)
        }}style = {{fontSize: 20}} size = "sm" gradient = "blue" width = {30}>+</MDBBtn></div>
      </div>
      <MDBModal isOpen={modal}>
            <MDBModalHeader>{"Add to your wishlist:"}</MDBModalHeader>
              <div style= {{justifyContent: 'center', display: 'flex', paddingRight: '19%'}}><MDBInput onChange = {(text) => {setAdd(text.target.value)}} style = {{width: '150%',  display: 'flex', justifyContent: 'center',}} label="Enter Amazon Link" /></div>
            <MDBModalFooter>
            <MDBBtn size = "sm" gradient="blue" onClick={() => {
              parsedResponse.push(add);
              axios.post(`http://localhost:5000/users/update/${currentId}`, {"wishlist": parsedResponse})
              .then(() => {window.location.reload()})
              .catch(() => {})
            }}>
                Add
              </MDBBtn>
             <MDBBtn size = "sm" gradient="purple" onClick={() => {setModal(!modal)}}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
    </MDBView>
  );

  return (
    
    <MDBView
      style={{
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
      }}
      src={presentBg}
    >
      {console.log("test")}
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

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <MDBTable borderless>
            <MDBTableHead >
              <tr style={{ color: "white", paddingLeft: '20%' }}>
                <th>#</th>
                <th>title</th>
                <th>price</th>
                <th></th>
              </tr>
            </MDBTableHead>
          </MDBTable>
        </div>
        <div style = {{justifyContent: 'center', display:'flex', color: 'white'}}><h1>You don't have anything in your wishlist!</h1></div>
        <div style = {{justifyContent: 'center', display: 'flex'}}><MDBBtn onClick = {() => {
          setModal(!modal)
        }}style = {{fontSize: 20}} size = "sm" gradient = "blue" width = {30}>+</MDBBtn></div>
      </div>
      <MDBModal isOpen={modal}>
            <MDBModalHeader>{"Add to your wishlist:"}</MDBModalHeader>
              <div style= {{justifyContent: 'center', display: 'flex', paddingRight: '19%'}}><MDBInput onChange = {(text) => {setAdd(text.target.value)}} style = {{width: '150%',  display: 'flex', justifyContent: 'center',}} label="Enter Amazon Link" /></div>
            <MDBModalFooter>
            <MDBBtn size = "sm" gradient="blue" onClick={() => {
              parsedResponse.push(add);
              axios.post(`http://localhost:5000/users/update/${currentId}`, {"wishlist": parsedResponse})
              .then(() => {window.location.reload()})
              .catch(() => {})
            }}>
                Add
              </MDBBtn>
             <MDBBtn size = "sm" gradient="purple" onClick={() => {setModal(!modal)}}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
    </MDBView>
  )
}


