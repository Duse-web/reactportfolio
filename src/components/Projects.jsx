import React from 'react';
import projectImage1 from '../assets/qq.jpg'; // Image for the first project
import projectImage2 from '../assets/dd.jpg'; // Image for the second project
import projectImage3 from '../assets/oo.png'; // Image for the third project

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-teal-600 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Updated Project 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={projectImage1} alt="Film Ranking Site" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Film Ranking Site</h3>
            <p className="text-gray-700 mb-4">
              A beginner-level project for ranking films. Built while learning the fundamentals of web development.
              Technologies used: HTML, CSS, and JavaScript.
            </p>
            <a 
              href="https://filmranks.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
            >
              View Project
            </a>
          </div>

          {/* Updated Project 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={projectImage2} alt="Duse Trevor Portfolio" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Duse Trevor Portfolio</h3>
            <p className="text-gray-700 mb-4">
              A modern portfolio website showcasing my projects and skills. Built using React and styled with Tailwind CSS.
            </p>
            <a 
              href="https://dusetrevorportfoliow.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
            >
              View Project
            </a>
          </div>

          {/* New Project 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={projectImage3} alt="Another Portfolio" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Another Portfolio</h3>
            <p className="text-gray-700 mb-4">
              One of my earlier portfolio projects. Highlights various skills and projects I have worked on.
              Technologies used: HTML, CSS, and JavaScript.
            </p>
            <a 
              href="https://dusetrevorportfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
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
