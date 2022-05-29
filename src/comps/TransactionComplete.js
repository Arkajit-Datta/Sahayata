import React from "react";
import { colors } from "../config";
import "./css/transaction.css";
import img from "../pages/assets/book.png"
function TransactionComplete({shgInfo,balance}) {
  return (
    <div className="container">
      <div className="shg-info">
        <div className="shg-name">{shgInfo.name}</div>
        <div className="shg-name">Transaction Successful !!</div>
        <div style={{
          color: colors.mediumGrey,
          fontSize:"25px",
        }}>New Current Balance in SHG - Rs {balance}</div>
      </div>
      <img style={{paddingTop:"50px"}}height={"150px"} src={img}></img>
    </div>
  );
}

export default TransactionComplete;
