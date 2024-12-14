import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-teal-600 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="project1-image.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Project Name 1</h3>
            <p className="text-gray-700 mb-4">A description of the project goes here. Technologies used: React, Node.js, etc.</p>
            <a 
              href="#"
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
            >
              View Project
            </a>
          </div>
          {/* Example Project 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="project2-image.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Project Name 2</h3>
            <p className="text-gray-700 mb-4">A brief description of the second project goes here. Technologies used: Vue, Firebase, etc.</p>
            <a 
              href="#"
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
            >
              View Project
            </a>
          </div>
          {/* Example Project 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="project3-image.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Project Name 3</h3>
            <p className="text-gray-700 mb-4">Description of this project. Technologies used: Python, Flask, MySQL.</p>
            <a 
              href="#"
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
