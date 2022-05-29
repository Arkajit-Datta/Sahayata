import { Field, Form, Formik } from "formik";
import React from "react";
import Navbar from "../../comps/Navbar";
import "../createSHG/createSGH.css";
import * as Yup from "yup";
import Button from "../../comps/Button";
import { Link } from "react-router-dom";
import { GLOBALS } from "../../config";
import done from "../../images/legalraasta.gif";
import { useNavigate } from "react-router-dom";
import SignupHook from "../../api/hooks/SignupHook";
const TransactionSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.number().required().min(1000000000).max(9999999999),
  age: Yup.number().required().min(10).max(150),
  location: Yup.string().required(),
  income: Yup.number().required().min(0),
  //   adhaar: Yup.mixed().test("fileSize", "The file is too large", (value) => {
  //     if (!value.length) return true; // attachment is optional
  //     return value[0].size <= 2000000;
  //   }),
  //   pan: Yup.mixed().test("fileSize", "The file is too large", (value) => {
  //     if (!value.length) return true; // attachment is optional
  //     return value[0].size <= 2000000;
  //   }),
  // adhaar: Yup.string().required(),
  // pan: Yup.string().required(),
});

const inputs = [
  {
    id: 1,
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    id: 2,
    label: "Your Phone number",
    name: "phone",
    type: "text",
  },
  {
    id: 3,
    label: "Your Age",
    name: "age",
    type: "text",
  },
  {
    id: 4,
    label: "Your Location",
    name: "location",
    type: "text",
  },
  {
    id: 5,
    label: "Your Anuual Income",
    name: "income",
    type: "text",
  },
  {
    id: 6,
    label: "Password",
    name: "password",
    type: "text",
  },
  {
    id: 7,
    label: "Your Adhaar Card",
    name: "adhaar",
    type: "file",
  },
  {
    id: 8,
    label: "Your Pan Card",
    name: "pan",
    type: "file",
  },
];

function Signup() {
  const { result, callApi } = SignupHook();
  const nav = useNavigate();

  console.log("logs from register page", result);
  const handleLogin = () => {
    callApi();
    setTimeout(() => {
      nav("/");
    }, 1500);
  };

  const [submitted, setsubmitted] = React.useState(false);
  return (
    <div className="container">
      <div className="header-1">Signup Form</div>
      <div className="form1-required">*Note - Required form fields</div>
      <Formik
        initialValues={GLOBALS.signupFormData}
        validationSchema={TransactionSchema}
        onSubmit={(values) => {
          setsubmitted(true);
          localStorage.setItem("signupFormData", JSON.stringify(values));
          // console.log("AFTER UPDATE ", GLOBALS.signupFormData);
          handleLogin();
        }}
      >
        {({ errors, touched, values, isValid, dirty, submitForm }) => (
          <Form className="form1">
            {/*label + field with placeholder and name +{errors.nameY && touched.nameY ? (
                  <div style={{ color: "red" }}>{"Name is Required"}</div>
            ) : null}*/}
            <div className="form1-grid">
              {inputs.map((item, id) => {
                let name = item.name;
                return (
                  <div className="label-input" key={id}>
                    <div className="from-label">
                      {item.label}
                      <div style={{ color: "red" }}>{` *`}</div>
                    </div>
                    <Field
                      placeholder={name}
                      className="form1-input"
                      name={name}
                      type={item.type === "file" ? "file" : ""}
                    />
                    {errors[name] && touched[name] ? (
                      <div style={{ color: "red" }}>
                        {"Please Enter Appropriate values!"}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              {submitted ? (
                <img src={done} style={{ height: "150px", width: "200px" }} />
              ) : (
                <Button
                  onClick={() => {
                    console.log("GLOBALS", GLOBALS.signupFormData, errors);
                    submitForm();
                  }}
                  text={"Submit"}
                  type="submit"
                  styles={{ marginBottom: "45px", marginTop: "45px" }}
                ></Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
