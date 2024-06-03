import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import DayIcon from "../components/DayIcon";
import Navbar from "../components/Navbar";

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
    <div>
      <Navbar
        showLinks={{
          logout: true,
        }}
      />
      <h1>{themeName}</h1>
      <div className="days">
        {days.length > 0 ? (
          days.map((day, index) => (
            <DayIcon
              key={day.day}
              day={day.day}
              locked={index > 0 && !days[index - 1].isCompleted}
              themeId={themeId}
            />
          ))
        ) : (
          <p>No days available for this theme.</p>
        )}
      </div>
    </div>
  );
}

export default ThemePage;
