import React from "react";
import { POST_URL_ENCODED_CONFIG } from "../../config";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";
import qs from "qs";
function GetuserdataHook() {
  const [result, setResult] = React.useState("");
  const axios = require("axios").default;

  const callApi = () => {
    const input = JSON.parse(localStorage.getItem("loginInput"));

    console.log("LOGIN VALUES", input);
    axios
      .post(
        API.GET_USER_DATA,
        qs.stringify({
          phone_number: input.phone,
        }),
        POST_URL_ENCODED_CONFIG
      )
      .then(function (response) {
        console.log("USER_DATA_HOOK_LOGS ", response);
        response.data&&setResult(response.data.user_profile)
        localStorage.setItem("signupFormData", JSON.stringify(response.data.user_profile));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { result, callApi };
}

export default GetuserdataHook;
