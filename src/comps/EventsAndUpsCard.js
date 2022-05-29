import React from "react";
import { Link } from "react-router-dom";
import { colors, fonts } from "../config";
import "./comps.css";
function EventsAndUpsCard({ img, info, link }) {
  return (
    <div className="events-updates-card">
      <img height={"210px"} src={img}></img>
      <a style={{ marginBlock:"15px", width: "90%", color: colors.grey, fontFamily: fonts.font1,fontSize:"16px" }}>
        {info}
      </a>
      <Link to={link} style={{fontFamily:fonts.font1,fontWeight:"500",textDecoration:"none" ,color:colors.black}}>Read More</Link>
    </div>
  );
}

export default EventsAndUpsCard;
