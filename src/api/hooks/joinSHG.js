import React from "react";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function JoinShgHook() {
  const [result, setResult] = React.useState("");

  const axios = require("axios").default;

  const callApi = (phone,name) => {
    let data = {
      shg_name: name,
      user_phone_number: phone,
    };
    console.log("INPUT JOIN SHG", data);
    axios
      .post(API.JOIN_SHG, data)
      .then(function (response) {
        console.log("FROM JOIN SHG HOOK", response);
        setResult(response.data.joining_result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { result, callApi };
}

export default JoinShgHook;
