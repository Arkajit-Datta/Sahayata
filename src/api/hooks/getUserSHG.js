import React from "react";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function GetUserSHG() {
  const [result, setResult] = React.useState("");

  const axios = require("axios").default;

  const callApi = (name) => {
      console.log("NAMEEE OF SHG",name)
    axios
      .post(API.GET_USER_SGH, {
        shg_name: name,
      })
      .then(function (response) {
        console.log("FROM GET USER SGH HOOK", response);

        setResult(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  
  return { result,callApi };
}

export default GetUserSHG;
