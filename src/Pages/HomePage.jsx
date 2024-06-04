import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar showLinks={{ home: false, about: true, login: true, signup: false }} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
        <div className="text-center p-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
            21 Days Challenge
          </h1>
          <p className="text-lg mb-10 leading-relaxed">
            Take the journey of self-improvement with our 21-day challenge. Transform your life with small, daily actions. Join us and start your path to a better you today!
          </p>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105">
            Join Us!
          </Link>
        </div>
        <div className="flex flex-wrap justify-center mt-10 space-x-6">
          <img src="https://www.irisdu.com/wp-content/uploads/2020/05/Artboard-%E2%80%93-6-min.png" alt="logo" className="w-32 h-32 m-4 md:m-0 md:w-40 md:h-40 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
          <div className="max-w-md text-left">
            <h2 className="text-4xl font-semibold mb-4">Improve yourself with us!</h2>
            <p className="text-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
