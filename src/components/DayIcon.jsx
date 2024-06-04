import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./DayIcon.css";

function DayIcon({ day, locked, themeId, isCompleted, isCurrent, position }) {
  return (
    <div className={`day-icon-container position-${position}`}>
      <Link
        to={locked ? "#" : `/theme/${themeId}/day/${day}`}
        className={`day-icon-link ${locked ? "locked" : ""}`}
        data-tooltip-id={`tooltip-${day}`}
        data-tooltip-content={locked ? "Complete previous days to unlock" : `Go to Day ${day}`}
      >
        <div
          className={`day-icon ${
            isCompleted ? "completed" : isCurrent ? "current" : "locked"
          }`}
        >
          {locked ? <span role="img" aria-label="locked">🔒</span> : `Day ${day}`}
        </div>
      </Link>
      <Tooltip id={`tooltip-${day}`} />
    </div>
  );
}

export default DayIcon;
