import React from "react";
import "./AboutPage.css";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div>
      <Navbar
        showLinks={{ home: true, about: false, login: true, signup: false }}
      />
      <div className="about-container">
        <div className="about-main">
          <h2>MERN APP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consectetur eligendi, doloribus labore obcaecati necessitatibus quia
            veritatis numquam blanditiis dolorum assumenda iste cum. Atque,
            impedit fugiat totam ut at exercitationem. <br /> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Doloremque, neque commodi
            voluptatem animi nam unde consectetur perspiciatis! Deleniti sunt,
            aspernatur deserunt repellat saepe qui suscipit accusantium
            voluptatem excepturi et! Dolor?
          </p>
        </div>
        <div className="about-side">
          <div className="about-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
              alt="Lafaiete"
              className="about-image"
            />
            <div>
              <h2>Lafaiete</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                reprehenderit beatae, laudantium delectus labore minus
                temporibus quos architecto molestiae facilis nulla, harum
                mollitia dolores sit? Neque quos quia laudantium voluptas?
              </p>
              <button>GitHub</button>
              <button>Linkedin</button>
            </div>
          </div>
          <div className="about-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
              alt="Natan"
              className="about-image"
            />
            <div>
              <h2>Natan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                reprehenderit beatae, laudantium delectus labore minus
                temporibus quos architecto molestiae facilis nulla, harum
                mollitia dolores sit? Neque quos quia laudantium voluptas?
              </p>
              <button>GitHub</button>
              <button>Linkedin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
