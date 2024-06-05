import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa,
  faPaintBrush,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

function ThemeSelectionPage({ handleLogout }) {
  const [themes, setThemes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThemes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("/themes", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThemes(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        } else {
          console.error(error);
        }
      }
    };

    fetchThemes();
  }, [navigate]);

  const handleStartTheme = async (themeId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const activeThemesResponse = await axios.get("/active-themes", {
        headers: { Authorization: `Bearer ${token}` },
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
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate(`/theme/${newThemeResponse.data._id}`);
      }
    } catch (error) {
      console.error("Error starting theme:", error);
    }
  };

  const nextTheme = () => {
    const newIndex = (currentIndex + 1) % themes.length;
    setNextIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 1000);
  };

  const prevTheme = () => {
    const newIndex = (currentIndex - 1 + themes.length) % themes.length;
    setNextIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 1000);
  };

  const selectTheme = (index) => {
    setNextIndex(index);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 1000);
  };

  const getIconForTheme = (themeName) => {
    switch (themeName) {
      case "Holistic Wellness":
        return faSpa;
      case "Awakened Creativity":
        return faPaintBrush;
      case "Mindful Productivity":
        return faBrain;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar showLinks={{ logout: true }} />
      <div className="absolute top-14 w-full z-20 flex justify-center py-4">
        <h1 className="text-4xl font-bold text-white">Select your trail:</h1>
      </div>
      <div className="relative flex-grow overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          {themes.length > 0 && (
            <div className="relative w-full h-full">
              <div
                className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: `url(${themes[currentIndex].image})`,
                }}
              ></div>
              {isAnimating && (
                <div
                  className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-crossfadeIn`}
                  style={{
                    backgroundImage: `url(${themes[nextIndex].image})`,
                  }}
                ></div>
              )}
            </div>
          )}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60 pt-20">
          {themes.length > 0 && (
            <>
              <div
                className={`text-center max-w-md mx-auto px-4 transition-opacity duration-1000 ease-in-out ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2
                  className="text-4xl font-bold text-white mb-4"
                  style={{ textShadow: "4px 4px 8px rgba(50, 50, 50, 1)" }}
                >
                  {themes[currentIndex].name}
                </h2>
                <p
                  className="text-lg text-white mb-6"
                  style={{ textShadow: "4px 4px 8px rgba(50, 50, 50, 1)" }}
                >
                  {themes[currentIndex].descriptionTheme}
                </p>
                <button
                  onClick={() => handleStartTheme(themes[currentIndex]._id)}
                  className="bg-cyan-800 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition-opacity duration-200"
                >
                  Start
                </button>
              </div>
              <div className="absolute bottom-8 w-full flex justify-center space-x-4 z-20">
                {themes.map((theme, index) => (
                  <button
                    key={theme._id}
                    className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
                      index === currentIndex
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => selectTheme(index)}
                  >
                    <FontAwesomeIcon
                      icon={getIconForTheme(theme.name)}
                      className="text-2xl text-white"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
          {themes.length === 0 && (
            <p className="text-white">No themes available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectionPage;
