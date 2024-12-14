import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base mb-4">&copy; 2024 Duse Trevor. All rights reserved.</p>
        <div className="flex justify-center space-x-8 text-lg">
          <a
            href="https://www.linkedin.com/in/prince-vesta-b0aba52b1/"
            className="hover:text-teal-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Duse-web"
            className="hover:text-teal-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/PrinceVesta1"
            className="hover:text-teal-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
