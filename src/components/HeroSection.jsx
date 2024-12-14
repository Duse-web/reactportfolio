import React from 'react';
import profileImage from '../assets/ww.jpg'; // Replace with your new image

const HeroSection = () => {
  return (
    <div 
      id="home" 
      className="h-screen bg-gradient-to-r from-teal-700 to-teal-500 text-white flex items-center justify-center text-center px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Image with Hover Effect */}
        <img 
          src={profileImage} 
          alt="Duse Trevor" 
          className="w-60 h-60 rounded-full mx-auto mb-6 border-4 border-white shadow-lg transform hover:scale-105 transition duration-500"
        />
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-shadow-md">Hi, I'm Duse Trevor</h1>
        {/* Introduction */}
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto leading-relaxed">
          I am a front-end developer passionate about building impactful web applications. 
          I specialize in creating solutions that make a real difference. Let's build something amazing together.
        </p>
        {/* View Work Button */}
        <a 
          href="projects" 
          className="bg-teal-800 hover:bg-teal-700 text-white py-3 px-8 rounded-full text-xl transition transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
