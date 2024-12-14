import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-teal-400 transition">MyPortfolio</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-teal-400 transition relative">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-400 transition relative">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-teal-400 transition relative">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-400 transition relative">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center py-4 space-y-4 text-lg">
          <li>
            <Link to="/" className="block hover:text-teal-400 transition" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-teal-400 transition" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/projects" className="block hover:text-teal-400 transition" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-teal-400 transition" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
