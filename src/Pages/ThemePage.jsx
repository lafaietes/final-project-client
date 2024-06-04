import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import DayIcon from "../components/DayIcon";
import Navbar from "../components/Navbar";
import "./ThemePage.css"; // Import the new CSS file

function ThemePage() {
  const { themeId } = useParams();
  const [themeName, setThemeName] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await axios.get(`/active-themes/${themeId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("Fetched theme data:", response.data);
        setThemeName(response.data.name);
        setDays(response.data.days || []);
      } catch (error) {
        console.error("Error fetching theme data:", error);
      }
    };
    fetchTheme();
  }, [themeId]);

  return (
    <div className="theme-page">
      <Navbar
        showLinks={{
          themeSelection: true,
          logout: true,
        }}
      />
      <h1 className="theme-title">{themeName}</h1>
      <div className="days-container">
        {days.length > 0 ? (
          days.map((day, index) => (
            <React.Fragment key={day.day}>
              <DayIcon
                day={day.day}
                locked={index > 0 && !days[index - 1].isCompleted}
                themeId={themeId}
                isCompleted={day.isCompleted}
                isCurrent={index === 0 || days[index - 1].isCompleted}
                position={index + 1}
              />
            </React.Fragment>
          ))
        ) : (
          <p className="no-days-message">No days available for this theme.</p>
        )}
      </div>
    </div>
  );
}

export default ThemePage;
