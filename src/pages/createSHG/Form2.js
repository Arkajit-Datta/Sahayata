import { Field, Form, Formik } from "formik";
import React from "react";
import Navbar from "../../comps/Navbar";
import "./createSGH.css";
import * as Yup from "yup";
import Button from "../../comps/Button";
import { Link } from "react-router-dom";
import { GLOBALS } from "../../config";
import CreateSHG from "../../api/hooks/createSHG";
 

import { useNavigate } from "react-router-dom";
import done from "../../images/legalraasta.gif";
const TransactionSchema = Yup.object().shape({
  name: Yup.string().required(),
  location: Yup.string().required(),
  amount: Yup.string().required(),
  description: Yup.string(),
});

const inputs = [
  {
    id: 1,
    label: "Name of your Self-Help Group",
    name: "name",
  },
  {
    id: 2,
    label: "Location of your Self-Help Group",
    name: "location",
  },
  {
    id: 3,
    label: "Current money amount (in Rs) of your Self-Help Group *",
    name: "amount",
  },
];
const handleSubmit = () => {
  // const [result, setResult] = React.useState();
  const axios = require("axios").default;



  const finalFormData = { ...GLOBALS.form1Data, ...GLOBALS.form2Data };
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
};
function Form2() {

  const [submitted,setsubmitted] = React.useState(false);
const navigate=useNavigate();
const handleNavigation=()=>{
  setsubmitted(true);
setTimeout(() => {
    navigate('/')
}, 1500);
}

  handleSubmit();
  return (
    <div className="container">
      <Navbar />
      <div classname=""></div>
      <div className="header-1">Create a self-help group</div>
      <div className="form1-required">*Note - Required Fields</div>
      <Formik
        initialValues={GLOBALS.form2Data}
        validationSchema={TransactionSchema}
        onSubmit={(values) => {
          //   console.log("form2 submit values ", values);
          GLOBALS.form2Data = values;
          handleSubmit();
          //   console.log("GLOBALS", GLOBALS.form2Data);
        }}
      >
        {({ errors, touched, values, isValid, dirty, submitForm }) => (
          <Form className="form1">
            {/*label + field with placeholder and name +{errors.nameY && touched.nameY ? (
                  <div style={{ color: "red" }}>{"Name is Required"}</div>
            ) : null}*/}

            {inputs.map((item, id) => {
              let name = item.name;
              return (
                <div className="label-input">
                  <div className="from-label">
                    {item.label}
                    <div style={{ color: "red" }}>*</div>
                  </div>
                  <Field
                    placeholder={name}
                    className="form2-input"
                    name={name}
                  />
                  {errors[name] && touched[name] ? (
                    <div style={{ color: "red" }}>
                      {"Please Enter the correct Value!"}
                    </div>
                  ) : null}
                </div>
              );
            })}
            {/* <div className="from-label">
              Range of money that can be lent by your SHG
            </div> */}
            <div className="label-input">
              <div className="from-label">
                Description of your Self-Help Group
              </div>
              <textarea
                placeholder={"SGH Details"}
                size="40"
                className="form2-input-des"
                name={"description"}
              />
            </div>
            <Link
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
              }}
              to={dirty && isValid ? "/form2" : "/form2"}
            >
              {submitted  ? (
                <img src={done} style={{ height: "150px", width: "200px" }} />
              ) : (
               
                <Button
                  onClick={() => {
                    submitForm();
                    handleNavigation();
                    console.log("GLOBALS", GLOBALS.form2Data);
                  }}
                  text={"Submit Request"}
                  type="submit"
                ></Button>
              )}
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Form2;
