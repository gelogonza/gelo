"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-green hover:opacity-80 transition"
        >
          AG
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-green cursor-pointer">
            <a href="#about">about</a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#experience">experience</a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#skills">skills</a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#projects">projects</a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#contact">contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-green"
          onClick={handleToggle}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-navy space-y-4 px-6 py-4">
          <li className="hover:text-green cursor-pointer">
            <a href="#about" onClick={handleToggle}>
              About
            </a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#skills" onClick={handleToggle}>
              Skills
            </a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#experience" onClick={handleToggle}>
              Experience
            </a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#projects" onClick={handleToggle}>
              Projects
            </a>
          </li>
          <li className="hover:text-green cursor-pointer">
            <a href="#contact" onClick={handleToggle}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
