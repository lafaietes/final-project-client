import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ThemeSelectionPage from "./Pages/ThemeSelectionPage";
import ThemePage from "./Pages/ThemePage";
import DayPage from "./Pages/DayPage";
import HomePage from "./Pages/HomePage";

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
