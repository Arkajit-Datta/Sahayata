import React from "react";
import { colors } from "../config";

function Button({ onClick, text, type, styles }) {
  return (
    <button
      // value={}
      type={type}
      style={{
        backgroundColor: colors.green,
        padding: "15px",
        borderStyle: "none",
        fontFamily: "poppins",
        borderRadius: "3px",
        color: "white",
        paddingInline: "25px",
        fontSize: "17px",
        ...styles ,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
