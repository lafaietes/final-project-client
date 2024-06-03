import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ showLinks }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
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
            <a onClick={handleLogoutClick} className="logout-link">
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
