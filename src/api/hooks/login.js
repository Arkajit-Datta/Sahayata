import React from "react";
import { POST_URL_ENCODED_CONFIG } from "../../config";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";
import qs from "qs";
function LoginHook() {
  const [result, setResult] = React.useState("");
  const axios = require("axios").default;

  const callApi = () => {
    const input = JSON.parse(localStorage.getItem("loginInput"));

    console.log("LOGIN VALUES", input);
    axios
      .post(
        API.LOGIN,
        qs.stringify({
          phone_number: input.phone,
          password: input.password,
        }),
        POST_URL_ENCODED_CONFIG
      )
      .then(function (response) {
        console.log("LOGIN_API_RESPONSE", response);
        response.data ? setResult(response.data.login_status) : setResult(-1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { result, callApi };
}

export default LoginHook;
