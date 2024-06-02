import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "./SignupPage.css";

function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", form);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <img src="/21.png" alt="Logo" className="signup-logo" />
      <div className="signup-right">
        <h2>Create a new account</h2>
        <hr />
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="name-fields">
            <input
              name="name"
              placeholder="First Name"
              onChange={handleChange}
              value={form.name}
              className="signup-input half-width"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={form.lastName}
              className="signup-input half-width"
            />
          </div>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="signup-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
