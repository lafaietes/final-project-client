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
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); // Estado para armazenar erros do servidor
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.name) {
      formErrors.name = "First name is required";
    } else if (!/^[a-zA-Z]+$/.test(form.name)) {
      formErrors.name = "First name cannot contain numbers or symbols";
    }

    if (!form.lastName) {
      formErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z]+$/.test(form.lastName)) {
      formErrors.lastName = "Last name cannot contain numbers or symbols";
    }

    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      formErrors.email = "Invalid email address";
    }

    if (form.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios.post("/auth/signup", form);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setServerError("User already exists");
      } else {
        console.error(error);
      }
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
            <div className="input-container">
              <input
                name="name"
                placeholder="First Name"
                onChange={handleChange}
                value={form.name}
                className={`signup-input half-width ${
                  errors.name ? "error-border" : ""
                }`}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="input-container">
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
                className={`signup-input half-width ${
                  errors.lastName ? "error-border" : ""
                }`}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>
          <div className="input-container">
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              className={`signup-input ${errors.email ? "error-border" : ""}`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              className={`signup-input ${
                errors.password ? "error-border" : ""
              }`}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          {serverError && <p className="error">{serverError}</p>}
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
