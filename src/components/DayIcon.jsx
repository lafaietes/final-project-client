import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./DayIcon.css";

function DayIcon({ day, locked, themeId }) {
  return (
    <div>
      <Link to={locked ? "#" : `/theme/${themeId}/day/${day}`} className="day-icon-link" data-tooltip-id={`tooltip-${day}`} data-tooltip-content={locked ? "Complete previous days to unlock" : `Go to Day ${day}`}>
        <div className={`day-icon ${locked ? "locked" : ""}`}>
          {locked ? <span role="img" aria-label="locked">🔒</span> : `Day ${day}`}
        </div>
      </Link>
      <Tooltip id={`tooltip-${day}`} />
    </div>
  );
}

export default DayIcon;
