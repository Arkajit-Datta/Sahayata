import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
function AuthButtons({ icon, text,onClick}) {
  return (
    <div className="auth-button" onClick={onClick}>
      {icon === "google" ? <BsGoogle /> : <BsFacebook />}
      {text}
    </div>
  );
}

export default AuthButtons;
