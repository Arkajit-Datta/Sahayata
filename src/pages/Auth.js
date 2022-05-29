import React from "react";
import Navbar from "../comps/Navbar";
import Login from "./auth/login";
import Signup from "./auth/signup";

function Auth() {
  const [authStatus, setauthStatus] = React.useState("login");
  return (
    <div>
      <Navbar />
      {authStatus === "login" ? (
        <Login setauthStatus={setauthStatus} />
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Auth;
