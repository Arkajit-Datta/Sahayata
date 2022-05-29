import React from "react";
import { Link } from "react-router-dom";
import { GLOBALS } from "../config";
import img from "../pages/assets/logo.png";
import Button from "./Button";
function Navbar() {
  const formData = JSON.parse(localStorage.getItem("signupFormData"));
  console.log("NAVBAR_LOGS", formData);

  const [loggedIn, setloggedIn] = React.useState(
    formData === null || formData.phone === "" ? false : true
  );

  return (
    <header className="Header_header__omCkM">
      <div className="topnav">
        <Link to={"/search"} id="nav" className="active">
          {/* <a id="nav" className="active" href=""> */}
          Self-help groups
          {/* </a> */}
        </Link>
        <Link to={"/"}>
          <a id="nav1" href="">
            About Us
          </a>
        </Link>
        <a
          id="nav2"
          href=""
          onClick={() => {
            debugger;
          }}
        >
          Events
        </a>
        <a id="nav3" href="">
          Contact Us
        </a>
        {loggedIn ? (
          <Link to={"/profile"}>
            <a id="nav4" href="">
              Profile
            </a>
          </Link>
        ) : (
          // <Link to={"/auth"}>
          <a href="/auth" className="butt" id="butt">
            Join now
          </a>
          // </Link>
        )}
        {/* <div styles={{ position:"absolute",marginLeft: "425px"}}>
        <Button styles={{left: "4025px"}} text={"Join Now"} ></Button>
        </div> */}
        <Link to={"/"}>
          <img style={{ marginLeft: "40px" }} src={img} alt="logo" id="nav5" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
