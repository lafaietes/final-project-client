import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";

function ThemeSelectionPage({ handleLogout }) {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get("/themes", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setThemes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchThemes();
  }, []);

  const handleStartTheme = async (themeId) => {
    try {
      const activeThemesResponse = await axios.get("/active-themes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const existingActiveTheme = activeThemesResponse.data.find(
        (activeTheme) => activeTheme.name === themeId
      );

      if (existingActiveTheme) {
        navigate(`/theme/${existingActiveTheme._id}`);
      } else {
        const newThemeResponse = await axios.post(
          `/active-themes/themes/${themeId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        navigate(`/theme/${newThemeResponse.data._id}`);
      }
    } catch (error) {
      console.error("Error starting theme:", error);
    }
  };

  return (
    <div>
      <Navbar
        showLinks={{
          logout: true,
        }}
      />
      <div className="pt-24 flex flex-col items-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 my-8">Select your trail</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {themes.map((theme) => (
            <div
              key={theme._id}
              className="theme-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={theme.image}
                alt={theme.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{theme.name}</h2>
                <p className="text-gray-600 mb-6">{theme.descriptionTheme}</p>
                <button
                  onClick={() => handleStartTheme(theme._id)}
                  className="block w-full bg-cyan-800 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectionPage;
