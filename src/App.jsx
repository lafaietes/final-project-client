import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "./Pages/AboutPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ThemeSelectionPage from "./Pages/ThemeSelectionPage";
import ThemePage from "./Pages/ThemePage";
import DayPage from "./Pages/DayPage";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/themes" element={<ThemeSelectionPage />} />
        <Route path="/theme/:themeId" element={<ThemePage />} />
        <Route path="/theme/:themeId/day/:dayId" element={<DayPage />} />
      </Routes>
    </div>
  );
}

export default App;
