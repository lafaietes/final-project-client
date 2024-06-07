import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function HomePage() {
  const [isDown, setIsDown] = useState(true);
  const toggleScroll = () => {
    const contentSection = document.getElementById("content-section");
    if (isDown) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsDown(!isDown);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar showLinks={{ about: true, login: true, signup: false }} />
      <header
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            21 Days Challenge
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your life with small, daily actions over the next 21 days.
            Join us on this journey of self-improvement and start your path to a
            better you today!
          </p>
          <Link
            to="/signup"
            className="bg-emerald-700 hover:bg-emerald-500 transition duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg"
          >
            Join Us!
          </Link>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={toggleScroll}
        >
          <svg
            className={`w-10 h-10 text-white animate-bounce transition-transform duration-300 ${
              isDown ? "" : "rotate-180"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </header>
      <section
        id="content-section"
        className="py-20 bg-gradient-to-r from-blue-100 to-purple-100"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Join the 21 Days Challenge?
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-6 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Self-Improvement</h3>
                <p className="text-gray-700">
                  Transform your life with small, daily actions designed to help
                  you grow and improve.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Themed trails</h3>
                <p className="text-gray-700">
                  Create or change habits by doing activities along themed
                  trails.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Register your experience
                </h3>
                <p className="text-gray-700">
                  You can record what your experience was each day, taking note
                  that the process is the prize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 21 Days Challenge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
