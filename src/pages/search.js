  
import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBInput, MDBContainer, MDBView } from "mdbreact";
import Navbar from "../components/navbar";
import homebg from "../assets/loginbg.jpg";

let parsedResponse = [];
let list = [];
let display = [];
let uniq = [];

function Nav() {
  return <Navbar renderContent={Search()} />;
}

const Search = () => {
  const [filtered, setFiltered] = useState([]);
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
    var name = e.target.id;
    for (var i = 0; i < parsedResponse.length; i++) {
      if (parsedResponse[i].username == name) {
        console.log(parsedResponse[i]._id);
      }
    }
  };

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
        </div>
      </MDBContainer>
    </MDBView>
  );
};

export default Nav;