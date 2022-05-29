import React from "react";
import { ImLocation } from "react-icons/im";
import GetuserdataHook from "../api/hooks/getUserData";
import JoinShgHook from "../api/hooks/joinSHG";
import img from "../images/unsplash_Z2YggU_u8mg.png";
import { Link, useNavigate } from "react-router-dom";
export default function SearchResCard({
  head,
  location,
  range,
  avgIncome,
  assurance,
  distance,
  text = null,
}) {
  // const [status, setstatus] = React.useState("Join SGH");
  const nav = useNavigate();
  const { result, callApi } = JoinShgHook();
  const { callApi: callApi2 } = GetuserdataHook();
  const user = JSON.parse(localStorage.getItem("signupFormData"));

  const handleJoin = () => {
    callApi(user.phone_number, head);
    callApi2();
    user.shg_name = head;
    localStorage.setItem("signupFormData", user);
  };

  const handleNavigate = () => {
    nav("/transaction");
  };
  return (
    <div className="searchResDiv">
      <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
        {head}
      </div>
      <div style={{ marginTop: "7px", color: "grey" }}>
        Location - {location}
      </div>
      <div
        style={{
          width: "70%",
          backgroundColor: "lightGrey",
          height: "1px",
          marginBlock: "12px",
        }}
      ></div>
      <img
        src={img}
        width="217px"
        height="104.81px"
        style={{ marginTop: "10px" }}
      ></img>
      <div
        style={{
          fontSize: "14px",
          color: "grey",
          marginTop: "21px",
          width: "80%",
        }}
      >
        Average Annual Income - Rs {avgIncome}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "grey",
          marginBlock: "10px",
          width: "80%",
        }}
      >
        Range - {range}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "grey",
          // marginTop: "px",
          marginBottom: "22px",
          width: "80%",
        }}
      >
        Assurance Rate - {assurance}%
      </div>
      {/* {:()} */}
      {/* <Link to={result === 1? "/transaction" : "/search"}> */}
        <button
          className="readMore"
          onClick={
            result === 1 || user.shg_name === head
              ? () => handleNavigate()
              : () => handleJoin()
          }
        >
          {result === 1 || user.shg_name === head||text=="Transaction" ? "Transaction" : "Join SGH"}
        </button>
      {/* </Link> */}
      <div style={{ fontSize: "14px", color: "grey", marginTop: "15px" }}>
        <ImLocation color="red" style={{ marginInline: "10px" }}></ImLocation>
        {"2.5 kms from your location"}
      </div>
    </div>
  );
}
