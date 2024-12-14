import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white flex items-center justify-center">
      <div className="text-center px-6">
        
        {/* Simple Introduction */}
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          I would love to hear from you! Whether you're looking to collaborate on a project or just want to connect, feel free to reach out. 
          You can contact me through social media or drop me an email anytime. Let's make something great together!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://www.linkedin.com/in/prince-vesta-b0aba52b1/" className="text-4xl hover:text-teal-300 transition-colors" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Duse-web" className="text-4xl hover:text-teal-300 transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/PrinceVesta1" className="text-4xl hover:text-teal-300 transition-colors" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/dusetrevor/" className="text-4xl hover:text-teal-300 transition-colors" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Info (Optional) */}
        <p className="text-sm text-teal-100">You can also reach me directly at: <strong>dusetrevor2001@gmail.com</strong></p>

      </div>
    </div>
  );
};

export default Contact;
