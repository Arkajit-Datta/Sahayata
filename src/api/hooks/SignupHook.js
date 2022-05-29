import React from "react";
import { POST_URL_ENCODED_CONFIG2 } from "../../config";
// import { GLOBALS } from "../../config";
import { API } from "../ApiList";
import qs from "qs";

function SignupHook() {
  const [result, setResult] = React.useState("");
  const axios = require("axios").default;

  const callApi = () => {
    const input = JSON.parse(localStorage.getItem("signupFormData"));

    // var form = new FormData();
    // form.append("aadhar", input.adhaar);
    // form.append("pan", input.pan);
    // form.append("name", input.name);
    // form.append("phone_number", input.phone);
    // form.append("password", input.password);
    // form.append("age", input.age);
    // form.append("location", input.location);
    // form.append("annual_income", input.income);

    console.log("Signup VALUES", {
        // aadhar: input.adhaar,
        // pan : input.pan,
        name: input.name,
        phone_number: input.phone,
        password: input.password,
        age: parseInt(input.age),
        location: input.location,
        annual_income: parseInt(input.income),
      });

    axios
      .post(
        API.SIGNUP,
        {
          // aadhar: input.adhaar,
          // pan : input.pan,
          name: input.name,
          phone_number: input.phone,
          password: input.password,
          age: parseInt(input.age),
          location: input.location,
          annual_income: parseInt(input.income),
        },
        POST_URL_ENCODED_CONFIG2
      )
      .then(function (response) {
        console.log(response);

        // response.data ? setResult(response.data) : setResult("failed");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { result, callApi };
}

export default SignupHook;
