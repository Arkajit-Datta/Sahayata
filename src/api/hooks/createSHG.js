import React from "react";
import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function CreateSHG() {
    const [result, setResult] = React.useState();
    const axios = require("axios").default;
    
    const finalFormData=GLOBALS.form1Data+GLOBALS.form2Data;
    console.log("CREATE SGH API VALUES", finalFormData);

  // axios
  //   .post(
  //     API.CREATE_SHG,
  //     {
  //       values:""
  //     }
  //   )
  //   .then(function (response) {
  //     console.log(response);
  //     response.data?setResult(response.data):setResult("failed");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // return {result};
}

export default CreateSHG;
