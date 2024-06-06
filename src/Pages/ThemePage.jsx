import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import DayIcon from "../components/DayIcon";
import Navbar from "../components/Navbar";

// Página para exibir os dias de um tema específico
function ThemePage() {
  const { themeId } = useParams();
  const [themeName, setThemeName] = useState("");
  const [days, setDays] = useState([]);
  const currentDayRef = useRef(null);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await axios.get(`/active-themes/${themeId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setThemeName(response.data.name);
        setDays(response.data.days || []);
      } catch (error) {
        console.error("Error fetching theme data:", error);
      }
    };
    fetchTheme();
  }, [themeId]);

  useEffect(() => {
    if (currentDayRef.current) {
      currentDayRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [days]);

  return (
    <div>
      <Navbar
        showLinks={{
          themeSelection: true,
          logout: true,
        }}
      />
      <div className="pt-24 flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-8">
          Your {themeName} path
        </h1>
        <div className="relative w-72 h-[1500px]">
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
                  ref={day.isCurrent ? currentDayRef : null}
                />
              </React.Fragment>
            ))
          ) : (
            <p className="text-gray-700 text-lg">
              No days available for this theme.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemePage;
