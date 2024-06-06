import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./src/Pages/AboutPage";
import SignupPage from "./src/Pages/SignupPage";
import LoginPage from "./src/Pages/LoginPage";
import ThemeSelectionPage from "./src/Pages/ThemeSelectionPage";
import ThemePage from "./src/Pages/ThemePage";
import DayPage from "./src/Pages/DayPage";
import HomePage from "./src/Pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/themes" element={<ThemeSelectionPage showLinks={{ home: true, about: true, login: false, signup: false, logout: true }} />} />
        <Route path="/theme/:themeId" element={<ThemePage showLinks={{ login: false, signup: false, logout: true }} />} />
        <Route path="/theme/:themeId/day/:dayId" element={<DayPage />} />
      </Routes>
    </div>
  );
}

export default App;
