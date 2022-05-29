import React from "react";
import { Link } from "react-router-dom";

function StoryOfTheDay({link="/",story}) {
  return (
    <div className="abt4">
      <div className="abt5" />
      <span className="abt6">Story of the Day</span>
      <Link to={link} className="abt7">Read more</Link>
      <span className="abt8">
        {story}
      </span>
      <div className="abt9" />
    </div>
  );
}

export default StoryOfTheDay;
