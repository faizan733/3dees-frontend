import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';

import logo from '../assets//png/logo.png'; // <-- Your logo file here

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo (adjusted height) */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="3DEES Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Menu Links */}
          <div className="flex flex-wrap justify-center gap-8 text-base font-medium">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Legal terms</a>
            <a href="#" className="hover:text-red-500 transition-colors">Documentation</a>
            <a href="#" className="hover:text-red-500 transition-colors">Contact us</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="border border-red-600 rounded-full p-3">
              <Facebook className="text-red-600 w-5 h-5" />
            </a>
            <a href="#" className="border border-red-600 rounded-full p-3">
              <Instagram className="text-red-600 w-5 h-5" />
            </a>
            <a href="#" className="border border-red-600 rounded-full p-3">
              <Linkedin className="text-red-600 w-5 h-5" />
            </a>
            <a href="#" className="border border-red-600 rounded-full p-3">
              <Twitter className="text-red-600 w-5 h-5" />
            </a>
            <a href="#" className="border border-red-600 rounded-full p-3">
              <Youtube className="text-red-600 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-800 mt-4" />

        {/* Bottom Copyright */}
        <div className="text-sm text-center pt-4">
          <span className="text-white">2025 copyright.</span>{' '}
          <span className="text-gray-400">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
