import React from "react";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function SearchShg() {
  const [result, setResult] = React.useState("");

  const axios = require("axios").default;

  const callApi = (location) => {
    let temp = [];
    axios
      .post(API.SEARCH_SHG, {
        location: location,
      })
      .then(function (response) {
        console.log("FROM HOOK", response);

        response.data.message.forEach((element, id) => {
          temp.push(element);
        });
        return temp;
      })
      .then((data) => {
        setResult(data);
        console.log("temp after api", temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { result, callApi };
}

export default SearchShg;
