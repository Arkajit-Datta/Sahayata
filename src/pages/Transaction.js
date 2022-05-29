import React from "react";
import TransactionSubScreen from "../comps/TransactionSubScreen";
import TransactionComplete from "../comps/TransactionComplete";
import { Link } from "react-router-dom";
import Navbar from "../comps/Navbar";
import GetuserdataHook from "../api/hooks/getUserData";
import GetUserSHG from "../api/hooks/getUserSHG";
// import GetUserSHG from "../api/hooks/getUserSHG";
function Transaction() {
  const [transactionStatus, setTransactionStatus] = React.useState(false);
  const [transactionInfo, settransactionInfo] = React.useState();
  let userData = JSON.parse(localStorage.getItem("signupFormData"));

  console.log("TRANSACTION PAGE INIITAL LOGS", userData);

  const { result,callApi } = GetUserSHG(userData.shg_name);
  callApi(userData.shg_name);
  // const { result } = GetUserSHG(userData.shg_name);

  console.log("TRANSACTION PAGE RESULT", result);
  let shgInfo = result.shg_arr;
  console.log("RESULTT",result);
  if (transactionStatus === "completed") {
    setTimeout(() => {
      setTransactionStatus(false);
    }, 2500);
  }
  // const shgInfo = {
  //   name: "Samaj Sevika Dal",
  //   location: "Ujjain District",
  //   avgIncome: "Rs 40,000",
  //   capital: "Rs 20,000",
  //   loanRange: "Medium",
  //   riskRate: "3%",
  //   ir: "1%",
  // };
  // return "hello"
  return (
    <>
      <Navbar />

      {transactionStatus ? (
        <TransactionComplete
          shgInfo={shgInfo}
          balance={
            transactionInfo.type === "deposit"
              ? shgInfo.balance + transactionInfo.amount
              : shgInfo.balance - transactionInfo.amount
          }
        />
      ) : result&&(
        <TransactionSubScreen
          user={userData}
          settransactionInfo={settransactionInfo}
          setTransactionStatus={setTransactionStatus}
          shgInfo={shgInfo}
        />
      )}
    </>
  );
}

export default Transaction;
