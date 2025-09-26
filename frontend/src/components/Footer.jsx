// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 md:px-16 py-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; 2025 IELTS Pro Institute. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
