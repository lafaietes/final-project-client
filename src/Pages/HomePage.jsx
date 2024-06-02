import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar
        showLinks={{ home: false, about: true, login: true, signup: false }}
      />
      <div className="home-container">
        <div className="home-content">
          <div className="home-left">
            <br />
            <br />
            <h1>21 Days challenge</h1>
            <img
              src="https://www.irisdu.com/wp-content/uploads/2020/05/Artboard-%E2%80%93-6-min.png"
              alt="logo"
              className="home-image"
            />
          </div>
          <div className="home-right">
            <br />
            <br />
            <br />
            <h3>Improve yourself with us!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              sint numquam magni in at esse, obcaecati consectetur impedit
              molestiae odio voluptas similique, illum laboriosam modi eius vel!
              Quis, non nam? <br /> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nulla minus provident dolorum aperiam eveniet.
            </p>
            <Link to="/signup">Join Us!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
