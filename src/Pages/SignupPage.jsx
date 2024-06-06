import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import { Link } from "react-router-dom"

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src="/21.png" alt="Logo" className="mb-5 w-80" />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font text-cyan-800 mb-4">Create a new account</h2>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <input
                name="name"
                placeholder="First name"
                onChange={handleChange}
                value={form.name}
                className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="w-1/2">
              <input
                name="lastName"
                placeholder="Surname"
                onChange={handleChange}
                value={form.lastName}
                className={`w-full p-3 border rounded-lg ${errors.lastName ? "border-red-500" : ""}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <input
            name="email"
            placeholder="someone@example.com"
            onChange={handleChange}
            value={form.email}
            className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Create password"
            onChange={handleChange}
            value={form.password}
            className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <button type="submit" className="bg-cyan-800 text-white w-full py-3 rounded-lg mt-2">Sign Up</button>
          {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
        </form>
        <p className="mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-cyan-800 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
