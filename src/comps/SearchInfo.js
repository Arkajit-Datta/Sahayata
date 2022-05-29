import React from "react";

export default function SearchInfo({ head, body }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "poppins",
        marginBlock: "60px",
        marginInline: "204px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize:"24px"
        }}
      >
        {head}
      </div>
      <div style={{}}>{body}</div>
    </div>
  );
}
