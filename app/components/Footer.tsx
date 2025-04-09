import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <p className="text-sm">© 2025 Ilker Durmush. All rights reserved.</p>
        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/IlkerDurmush"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaGithub size={24} />
          </a>
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/_.i.d.___?igsh=NHA4eWNhNmg5d3R3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
