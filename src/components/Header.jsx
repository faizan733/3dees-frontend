import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/png/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // 👈 this hook allows redirection

  const handleSignIn = () => {
    navigate('/dashboard'); // 👈 redirects to /dashboard route
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="3DEES3RD Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#characters" className="text-gray-300 hover:text-white transition-colors">Characters</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Desktop Sign In */}
          <div className="hidden md:block">
            <button
              onClick={handleSignIn}
              className="bg-red-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#characters" className="block px-3 py-2 text-gray-300 hover:text-white">Characters</a>
            <a href="#roadmap" className="block px-3 py-2 text-gray-300 hover:text-white">Roadmap</a>
            <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
            <button
              onClick={handleSignIn}
              className="w-full text-left px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
