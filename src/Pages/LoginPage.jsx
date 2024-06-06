import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

// Página de login para autenticar usuários
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
      localStorage.setItem("token", response.data.authToken); // Armazena o token no armazenamento local
      navigate("/themes"); // Redireciona para a página de seleção de temas
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        setError("User not found"); // Define mensagem de erro se o usuário não for encontrado
      } else if (error.response && error.response.status === 401) {
        setError("Password incorrect"); // Define mensagem de erro se a senha estiver incorreta
      } else {
        setError("Invalid email or password"); // Define mensagem de erro genérica
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src="/21.png" alt="Logo" className="mb-5 w-80" />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl text-cyan-800 mb-4">Access your account:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="w-full p-3 border rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-cyan-800 text-white w-full py-3 rounded-lg mt-2"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-800 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
