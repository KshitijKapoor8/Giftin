import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBInput, MDBContainer, MDBView } from "mdbreact";
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

let parsedResponse = [];
let list = [];
let display = [];
let uniq = [];

var name;

var id;

function Nav() {
  return <Navbar renderContent={Search()} />;
}

const Search = () => {
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
            <MDBModalBody>hello</MDBModalBody>
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
