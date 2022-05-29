import { Field, Form, Formik } from "formik";
import React from "react";
import Navbar from "../../comps/Navbar";
import "./createSGH.css";
import * as Yup from "yup";
import Button from "../../comps/Button";
import { Link } from "react-router-dom";
import { GLOBALS } from "../../config";
const TransactionSchema = Yup.object().shape({
  nameY: Yup.string().required(),
  phoneY: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
  name1: Yup.string().required(),
  phone1: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
  name2: Yup.string().required(),
  phone2: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
  name3: Yup.string().required(),
  phone3: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
  name4: Yup.string().required(),
  phone4: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
  name5: Yup.string().required(),
  phone5: Yup.number("Input must be a Number!")
    .required()
    .min(1000000000)
    .max(9999999999),
});

const inputs = [
  {
    id: 1,
    label: "Your Name",
    name: "nameY",
  },
  {
    id: 2,
    label: "Your Phone number",
    name: "phoneY",
  },
  {
    id: 3,
    label: "Member 1 Name",
    name: "name1",
  },
  {
    id: 4,
    label: "Member 1 Phone",
    name: "phone1",
  },
  {
    id: 5,
    label: "Member 2 Name",
    name: "name2",
  },
  {
    id: 6,
    label: "Member 2 Phone",
    name: "phone2",
  },
  {
    id: 7,
    label: "Member 3 Name",
    name: "name3",
  },
  {
    id: 8,
    label: "Member 3 Phone",
    name: "phone3",
  },
  {
    id: 9,
    label: "Member 4 Name",
    name: "name4",
  },
  {
    id: 10,
    label: "Member 4 Phone",
    name: "phone4",
  },
  {
    id: 11,
    label: "Member 5 Name",
    name: "name5",
  },
  {
    id: 12,
    label: "Member 5 Phone",
    name: "phone5",
  },
];

function Form1() {
  return (
    <div className="container">
      <Navbar />
      <div classname=""></div>
      <div className="header-1">Create a self-help group</div>
      <div className="form1-required">
        *Note - It is important to have a minimum of 5 people to create a
        self-help group
      </div>
      <Formik
        initialValues={GLOBALS.form1Data}
        validationSchema={TransactionSchema}
        onSubmit={(values) => {
          console.log("transaction form values ", values);
          GLOBALS.form1Data=values;
        }}
      >
        {({ errors, touched, values,isValid,dirty,submitForm}) => (
          <Form className="form1">
            {/*label + field with placeholder and name +{errors.nameY && touched.nameY ? (
                  <div style={{ color: "red" }}>{"Name is Required"}</div>
            ) : null}*/}
            <div className="form1-grid">
              {inputs.map((item, id) => {
                let name = item.name;
                return (
                  <div className="label-input">
                    <div className="from-label">{item.label }<div style={{color:"red"}}>{` *`}</div></div>
                    <Field
                      placeholder={name}
                      className="form1-input"
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
            </div>
            <Link style={{
              display: "flex",flexDirection:"column",alignItems:"center",textDecoration:"none"
            }} to={dirty&&isValid? "/form2" : "/form1"}>
              <Button onClick={()=>{
                submitForm();
               
                console.log("GLOBALS", GLOBALS.form1Data)
                }}  text={"Next"} type="submit"></Button>
              </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Form1;
