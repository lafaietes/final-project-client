import React from "react";
import { Link } from "react-router-dom";

function Navbar({ showLinks }) {
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
      </ul>
    </nav>
  );
}

export default Navbar;
