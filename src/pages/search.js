import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBInput, MDBContainer, MDBView, MDBTableBody, MDBTableHead, MDBTable} from "mdbreact";
import Navbar from "../components/navbar";
import homebg from "../assets/loginbg.jpg";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { getAmazonPrice, getAmazonTitle, getHTML } from "./scrape";
import Loader from "react-loader-spinner";

let parsedResponse = [];
let list = [];
let display = [];
let uniq = [];
let priceArray = [];
let titleArray = [];
let priceSet = [];
let titleSet = [];

var name;

var id;

function Nav() {
  if (localStorage.getItem("userToken") === "") {
    window.location = "/";
  }
  return <Navbar renderContent={Search()} />;
}

const Search = () => {
  const [loading, setLoading] = useState(true)
  const [filtered, setFiltered] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/", {})
      .then((res) => {
        parsedResponse = JSON.parse(JSON.stringify(res.data));
        parsedResponse
          .slice(0)
          .reverse()
          .map((parsedResponse) => {
            list.push(parsedResponse.username);
          });
        setFiltered(list);
      })
      .catch((err) => {});
  }, []);

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

  async function scrapePage() {
    if (loading) {
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

  const findUser = (e) => {
    name = e.target.id;

    for (var i = 0; i < parsedResponse.length; i++) {
      if (parsedResponse[i].username == name) {
        id = parsedResponse[i]._id;
      }
    }

    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        parsedResponse = JSON.parse(JSON.stringify(res.data.wishlist));
        console.log(parsedResponse);
      })
      .catch((err) => {});

    setModal(true);
  };
  function toggle() {
    setModal(false);
  }

  const searchData = (e) => {
    let currentList = [];

    let newList = [];

    if (e.target.value !== "") {
      currentList = list;

      newList = currentList.filter((item) => {
        const lc = item;

        const filter = e.target.value;

        if (lc.startsWith(filter)) {
          display.push(lc);
          display.push(" ");
          uniq = [...new Set(display)];
        }
      });
    } else {
      newList = list;
      display = [];
      uniq = [];
    }

    setFiltered(newList);
  };


  function LoadingBody() {
    if(loading){
      return(<MDBModalBody> <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> </MDBModalBody>)
    }
    else{
      return(<MDBModalBody><MDBTable borderless>
        <MDBTableHead>
          <tr style={{ color: "white" }}>
            <th>#</th>
            <th>title</th>
            <th>price</th>
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
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable></MDBModalBody>)
    }
  }

  return (
    <MDBView src={homebg}>
      <MDBContainer>
        <div style={{ paddingTop: "5rem" }}>
          <MDBInput
            label="Search!"
            onChange={searchData}
            size="lg"
            icon="search"
            style={{ color: "white" }}
          />
          <div>
            {uniq.map((item) => {
              return (
                <ul
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    color: "white",
                  }}
                  onClick={findUser}
                  id={item}
                >
                  {item}
                </ul>
              );
            })}
          </div>
          <MDBModal isOpen={modal}>
            <MDBModalHeader>{name + "'s Wishlist"}</MDBModalHeader>
            <LoadingBody/>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </MDBContainer>
    </MDBView>
  );
};

export default Nav;
