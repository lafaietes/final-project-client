import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ showLinks }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBackClick = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <nav className="bg-emerald-950 bg-opacity-75 backdrop-filter backdrop-blur-lg fixed top-0 w-full z-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">
            <img
              src="/icon-navbar.png"
              alt="App Icon"
              style={{ height: "32px", width: "auto" }}
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          {showLinks.home && (
            <Link
              to="/"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          )}
          {showLinks.about && (
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          )}
          {showLinks.themeSelection && (
            <Link
              to="/themes"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Trails
            </Link>
          )}
          {showLinks.login && (
            <Link
              to="/login"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Login
            </Link>
          )}
          {showLinks.signup && (
            <Link
              to="/signup"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Sign-up
            </Link>
          )}
          {showLinks.back && (
            <button
              onClick={handleBackClick}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Back
            </button>
          )}
          {showLinks.logout && (
            <button
              onClick={handleLogoutClick}
              className="text-white hover:text-red-400 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
