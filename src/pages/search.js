import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBInput, MDBContainer } from "mdbreact";
import { FaAlignJustify } from "react-icons/fa";

let parsedResponse = [];
let list = [];
let display = [];
let uniq = [];

let id = [];

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

  const searchData = (e) => {
    let currentList = [];

    let newList = [];

    if (e.target.value !== "") {
      currentList = list;

      newList = currentList.filter((item) => {
        const lc = item.toLowerCase();

        const filter = e.target.value.toLowerCase();

        if (lc.includes(filter)) {
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
    <MDBContainer>
      <div>
        <MDBInput
          label="Search!"
          onChange={searchData}
          size="lg"
          icon="search"
        />
        <ul style={{ textAlign: "center", fontSize: "2rem" }}>{uniq}</ul>
      </div>
    </MDBContainer>
  );
};

export default Search;
