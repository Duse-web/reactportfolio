import React from 'react';
import aboutImage from '../assets/about.jpg'; // Make sure the image is in the 'assets' folder

const About = () => {
  return (
    <div id="about" className="py-20 bg-gradient-to-r from-teal-800 to-teal-600 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side: About text */}
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              I'm Duse Trevor, a passionate front-end developer with over 2 years of experience. I specialize in creating modern, responsive, and efficient web applications that solve real-world problems.
              <br />
              <br />
              My focus is on delivering high-quality solutions with a strong emphasis on user experience and performance. I am constantly honing my skills and keeping up with the latest technologies in the industry.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a 
                href="projects" 
                className="bg-teal-800 hover:bg-teal-600 text-white py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105"
              >
                View My Projects
              </a>
              <a 
                href="contact" 
                className="bg-transparent border-2 border-white hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side: Image and Skills */}
          <div className="text-center md:text-left">
            <img 
              src={aboutImage} 
              alt="Duse Trevor"
              className="rounded-lg shadow-lg max-w-full h-auto mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-semibold mt-6 mb-4">Skills & Technologies</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-6 h-6 mr-3 text-teal-400">•</span> HTML, CSS, and JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-3 text-teal-400">•</span> React.js & Next.js
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-3 text-teal-400">•</span> Node.js & Express.js
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-3 text-teal-400">•</span> MongoDB & SQL Databases
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-3 text-teal-400">•</span> Git, GitHub & Version Control
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
