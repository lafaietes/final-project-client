import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutPage() {
  return (
    <div>
      <Navbar showLinks={{ home: true, about: false, login: true, signup: false }} />
      <div className="bg-gray-300 min-h-screen place-content-center">
        <div className="px-20 py-20 max-auto mx-auto my-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white px- p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 justify-center">M.E.R.N. APP</h2>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consectetur eligendi, doloribus labore obcaecati necessitatibus quia
                veritatis numquam blanditiis dolorum assumenda iste cum. Atque, impedit fugiat totam ut at exercitationem. <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci quisquam ad et rerum iure sint expedita, aspernatur enim corrupti necessitatibus quaerat illum mollitia in beatae hic tempora. Ratione, accusamus.
              </p>
              <div className="flex mt-4 space-x-4 place-content-center">
                <button onClick={() => window.open('https://github.com/lafaietes/final-project-client', '_blank')} className="btn-primary flex items-center space-x-2 py-2 px-4 text-lg hover:shadow-md rounded-xl">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span>Client Repo</span>
                </button>
                <button onClick={() => window.open('https://github.com/natansima/final-project', '_blank')} className="btn-primary flex items-center space-x-2 py-2 px-4 text-lg hover:shadow-md rounded-xl">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span>Server Repo</span>
                </button>
              </div>
            </div>
            <div className="space-y-8">
              
              <div className="bg-white rounded-lg shadow-md flex">
                <div className="flex-shrink-0 w-2/5">
                  <img
                    src="Lafaiete.png"
                    alt="Lafaiete"
                    className="object-cover w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="ml-4 w-3/5 p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Lafaiete Santos</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Age:</strong> 25 <br />
                    <strong>Location:</strong> Lisbon, PT <br />
                    <strong>Occupation:</strong> Fullstack Developer <br />
                    <strong>Skills:</strong> JavaScript, React, Node.js, Express, MongoDB, HTML5, CSS3, ES6
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/lafaietes" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/lafaiete-santos-3885b7242/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://buymeacoffee.com/lafaiete" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faCoffee} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex">
                <div className="flex-shrink-0 w-2/5">
                  <img
                    src="Natan.png"
                    alt="Natan"
                    className="object-cover w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="ml-4 w-3/5 p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Natan Simões</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Age:</strong> 24 <br />
                    <strong>Location:</strong> Lisbon, PT <br />
                    <strong>Occupation:</strong> Fullstack Developer <br />
                    <strong>Skills:</strong> JavaScript, React, Node.js, Express, MongoDB, HTML5, CSS3, ES6
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/natansima" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/natan-simoes12/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://buymeacoffee.com/lafaiete" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FontAwesomeIcon icon={faCoffee} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
