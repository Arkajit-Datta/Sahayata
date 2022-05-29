import React from "react";
import "./css/transaction.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Transaction from "../api/hooks/deposit";

const TransactionSchema = Yup.object().shape({
  amount: Yup.number("Input must be a Number!").required().min(0).max(10000000),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  date: Yup.date(),
});

function TransactionSubScreen({settransactionInfo, shgInfo, setTransactionStatus, user }) {
  const [submitType, setSubmitType] = React.useState();

  const { result, callApi } = Transaction(user);

  const handleDeposit = () => {
    setSubmitType("deposit");
  };
  const handleWithdraw = () => {
    setSubmitType("withdraw");
  };

  return (
    <div className="container">
      <div className="shg-info">
        <div className="shg-name">{shgInfo.name}</div>
        <div className="shg-detail">
          <ul className="left">
            <li>
              <a style={{ fontWeight: "500" }}>{"Location "}</a>-{" "}
              {shgInfo.location}
            </li>
            <li>
              <a style={{ fontWeight: "500" }}>{"Average Annual Income "}</a>-{" "}
              {shgInfo.average_annual_income}
            </li>
            <li>
              <a style={{ fontWeight: "500" }}>{"Current Capital "}</a>-{" "}
              {shgInfo.balance}
            </li>
          </ul>
          <ul className="left">
            <li>
              <a style={{ fontWeight: "500" }}>{"Money Loan Range "}</a>-{" "}
              {shgInfo.range}
            </li>
            <li>
              <a style={{ fontWeight: "500" }}>{"Risk Rate "}</a>-{" "}
              {shgInfo.assurance_rate}
            </li>
            <li>
              <a style={{ fontWeight: "500" }}>{"Interest Rate "}</a>- 1.5%
            </li>
          </ul>
        </div>
      </div>

      <Formik
        initialValues={{
          amount: null,
          description: "",
          date: "",
        }}
        validationSchema={TransactionSchema}
        onSubmit={(values) => {
          console.log("transaction form values ", values);
          callApi(submitType, values.amount, values.date, values.description);
          setTransactionStatus(true);
          values.type=submitType;
          settransactionInfo(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="transaction-form">
            <div className="label-input">
              <div className="from-label">Enter the amount in Rs -</div>
              <Field
                placeholder="Amount in ₹"
                className="input"
                name="amount"
                type="number"
              />
              {errors.amount && touched.amount ? (
                <div style={{ color: "red" }}>
                  {"Amount is required and needs to be a Number!"}
                </div>
              ) : null}
            </div>
            <div className="label-input">
              <div className="from-label">Enter the description in words -</div>
              <Field
                placeholder="for what purpose the money is taken"
                className="input"
                name="description"
              />
              {errors.description && touched.description ? (
                <div style={{ color: "red" }}>{errors.description}</div>
              ) : null}
            </div>
            <div className="label-input">
              <div className="from-label">Enter the date of transaction -</div>
              <Field
                placeholder="Date"
                className="input"
                name="date"
                type="date"
              />
              {errors.date && touched.date ? (
                <div style={{ color: "red" }}>{errors.date}</div>
              ) : null}
            </div>
            <div className="buttons">
              <Button
                onClick={() => handleWithdraw()}
                text={"Withdraw"}
                type="submit"
              ></Button>
              <Button
                onClick={() => handleDeposit()}
                text={"Deposit"}
                type="submit"
              ></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TransactionSubScreen;
