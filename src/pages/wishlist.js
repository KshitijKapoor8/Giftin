import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MDBView, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import presentBg from "../assets/present.jpg";
import axios from "axios";
import { getAmazonPrice, getAmazonTitle, getHTML } from "./scrape";
let parsedResponse = [];
let priceArray = [];
let titleArray = [];
let priceSet = [];
let titleSet = [];
let asin = [];

export default function Wishlist() {
  if (localStorage.getItem("userToken") === "") {
    window.location = "/";
  }
  return <Navbar renderContent={RenderContent()} />;
}
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function RenderContent() {
  const [loading, setLoading] = useState(true);
  const [loadData, setLoadData] = useState(true);
  const [stuff, setstuff] = useState(true);
  let currentId = localStorage.getItem("userToken");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${currentId}`)
      .then((res) => {
        parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
        setLoading(false);
        amazon();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function amazon() {
    for (let i = 0; i < parsedResponse.length; i++) {
      var regex = RegExp(
        "https://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})"
      );
      var t = parsedResponse[i].match(regex);
      if (t) {
        asin.push(t[4]);
      }
    }
    if (asin.length === parsedResponse.length) {
      console.log(getData(asin[1]));
    }

    function getData(asin) {
      if (asin !== "undefined") {
        console.log(asin);
        const API = `https://api.rainforestapi.com/request?api_key=D1353B3B816F48CDBBE7DFA7639FD47B&type=product&amazon_domain=amazon.com&asin=${asin}`;
        return new Promise((resolve, reject) => {
          fetch(API, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application///json",
            },
          })
            .then((response) => {
              response.json().then((data) => {
                console.log(data);
                if (data.request_info.success.toString() === "false") {
                  console.log("hello");
                } else if (data.request_info.success.toString() === "true") {
                  resolve(data);
                  getData().then((data) => {
                    if (data.request_info.success.toString() === "false") {
                      console.log("hello again");
                    } else if (
                      data.request_info.success.toString() === "true"
                    ) {
                      let value = data.product.buybox_winner.price.value.toString();
                      console.log(value);
                    }
                  });
                }
              });
            })
            .catch((error) => {
              console.log("Error fetching response: ", error);
            });
        });
      } else {
        console.log("wait");
      }
    }
  }
  // for (let i = 0; i < asin.length; i++) {
  //   console.log(asin[i]);
  //setstuff(false);
  //console.log(getData(asin[1]));
  // }

  if (loading) return null;

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
            <MDBTableHead>
              <tr style={{ color: "white" }}>
                <th>#</th>
                <th>title</th>
                <th>price</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {parsedResponse.map((links, index) => {
                if (setLoadData) return null;

                return (
                  <tr style={{ color: "white" }}>
                    <th>{links}</th>
                    <th>{priceSet[index]}</th>
                    <th>price</th>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </MDBView>
  );
}
