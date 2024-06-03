import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "./LoginPage.css";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", form);
      localStorage.setItem("token", response.data.authToken);
      navigate("/themes");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        setError("User not found");
      } else if (error.response && error.response.status === 401) {
        setError("Password incorrect");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="login-container">
      <img src="/21.png" alt="Logo" className="login-logo" />
      <div className="login-right">
        <p>Access your account:</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="login-input"
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
