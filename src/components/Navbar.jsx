import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
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
    <nav>
      <ul>
        {showLinks.home && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {showLinks.about && (
          <li>
            <Link to="/about">About</Link>
          </li>
        )}
        {showLinks.themeSelection && (
          <li>
            <Link to="/themes">Themes</Link>
          </li>
        )}
        {showLinks.login && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {showLinks.signup && (
          <li>
            <Link to="/signup">Sign-up</Link>
          </li>
        )}
        {showLinks.logout && (
          <li>
            <a onClick={handleLogoutClick}>
              Logout
            </a>
          </li>
        )}
        {showLinks.back && (
          <li>
            <Link onClick={handleBackClick}>Back</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;












