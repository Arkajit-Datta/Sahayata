import React from "react";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function Transaction( userData) {
  const [result, setResult] = React.useState("");

  const axios = require("axios").default;

  const callApi = (type,amount,date,description) => {
    axios
      .post(type === "deposit" ? API.DEPOSIT : API.WITHDRAW, {
        shg_name: userData.shg_name,
        user_phone_number: userData.phone_number,
        amount: amount,
        date: date,
        descrption: description,
      })
      .then(function (response) {
        console.log("FROM GET TRANSACTION HOOK", response);

        // setResult(response.data.shg_arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  

  return { result,callApi };
}

export default Transaction;
