import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "./ThemeSelectionPage.css";

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
      // Obter todos os temas ativos do usuário
      const activeThemesResponse = await axios.get("/active-themes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const existingActiveTheme = activeThemesResponse.data.find(
        (activeTheme) => activeTheme.name === themeId
      );

      // Se já houver um tema ativo com o mesmo nome, redirecione para ele
      if (existingActiveTheme) {
        navigate(`/theme/${existingActiveTheme._id}`);
      } else {
        // Caso contrário, crie um novo tema
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
    <div className="theme-selection-container">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>{" "}
      <h1>Select a Theme</h1>
      <div className="themes">
        {themes.map((theme) => (
          <div key={theme._id} className="theme-card">
            <h2>{theme.name}</h2>
            <button onClick={() => handleStartTheme(theme._id)}>Start</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelectionPage;
