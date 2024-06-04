import React from "react";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div>
      <Navbar showLinks={{ home: true, about: false, login: true, signup: false }} />
      <div className="bg-gray-100 min-h-screen">
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">M.E.R.N. APP</h2>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consectetur eligendi, doloribus labore obcaecati necessitatibus quia
                veritatis numquam blanditiis dolorum assumenda iste cum. Atque, impedit fugiat totam ut at exercitationem.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque commodi voluptatem animi nam unde consectetur perspiciatis! Deleniti sunt,
                aspernatur deserunt repellat saepe qui suscipit accusantium voluptatem excepturi et! Dolor?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae neque quis aspernatur, iure sequi architecto quas atque rem blanditiis harum ipsam eveniet sit obcaecati deleniti quos a illo iusto. At.
              </p>
              <div className="flex mt-4">
                <button className="btn-primary mr-4">GitHub</button>
                <button className="btn-primary">LinkedIn</button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
                  alt="Lafaiete"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Lafaiete Santos</h2>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit beatae, laudantium delectus labore minus temporibus quos architecto molestiae facilis nulla, harum mollitia dolores sit? Neque quos quia laudantium voluptas?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est incidunt atque. Quas a nostrum commodi. Unde ad enim deleniti, quia aspernatur magni inventore reprehenderit quae amet aperiam eos obcaecati.
                  </p>
                  <div className="flex">
                    <button className="btn-primary mr-4">GitHub</button>
                    <button className="btn-primary">LinkedIn</button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
                  alt="Natan"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Natan Simões</h2>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit beatae, laudantium delectus labore minus temporibus quos architecto molestiae facilis nulla, harum mollitia dolores sit? Neque quos quia laudantium voluptas?
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam a pariatur aut reprehenderit non architecto commodi illo rerum fugit voluptates ullam quae, esse voluptas doloribus ipsa velit, voluptatem asperiores. Ipsum.
                  </p>
                  <div className="flex">
                    <button className="btn-primary mr-4">GitHub</button>
                    <button className="btn-primary">LinkedIn</button>
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
