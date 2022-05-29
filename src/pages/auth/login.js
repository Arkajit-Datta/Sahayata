import React from "react";
import { useNavigate } from "react-router-dom";
import LoginHook from "../../api/hooks/login";
import AuthButtons from "../../comps/AuthButtons";
import "./auth.css";
import done from "../../images/legalraasta.gif";
import GetuserdataHook from "../../api/hooks/getUserData";

function Login({ setauthStatus }) {
  const nav = useNavigate();

  const { result: result1, callApi: callApi1 } = LoginHook();
  const { result: result2, callApi: callApi2 } = GetuserdataHook();
  const [phone, setphone] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handleLogin = () => {
    localStorage.setItem(
      "loginInput",
      JSON.stringify({ phone: phone, password: password })
    );
    callApi1();
    callApi2();
    setTimeout(() => {
      nav("/");
    }, 1500);
  };
  // if (result1 === 1) {
  //   callApi2();
  //   setTimeout(() => {
  //     nav("/");
  //   }, 1500);
  // }

  // if (result2 !== -1)
  //   localStorage.setItem("signupFormData", JSON.stringify(result2));

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">LOGIN</div>
        <AuthButtons text={"Continue with google"} icon="google" />
        <AuthButtons text={"Continue with facebook"} icon="facebook" />
        <div className="login-or">OR</div>
        <input
          className="login-input"
          placeholder="Phone Number"
          onChange={(e) => setphone(e.target.value)}
        ></input>
        <input
          className="login-input"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        {result1 === 1 ? (
          <img src={done} style={{ height: "150px", width: "200px" }} />
        ) : (
          <button className="login-button" onClick={() => handleLogin()}>
            Login
          </button>
        )}

        <div className="login-footer">
          New Account? &nbsp;
          <div
            className="register-link"
            onClick={() => {
              setauthStatus("register");
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
