import React from "react";
import { Link } from "react-router-dom";
import "./DayIcon.css";

function DayIcon({ day, locked, themeId }) {
  return (
    <Link to={locked ? "#" : `/theme/${themeId}/day/${day}`}>
      <div className={`day-icon ${locked ? "locked" : ""}`}>
        {locked ? "🔒" : `Day ${day}`}
      </div>
    </Link>
  );
}

export default DayIcon;
