"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["about", "projects", "contact"];

  return (
    <nav className="bg-gray-950 bg-opacity-70 backdrop-blur-sm p-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            Ilker
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              D.
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((route) => (
            <li key={route}>
              <Link
                href={`/${route}`}
                className="text-gray-200 px-4 py-2 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white"
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="transition duration-300 ease-in-out hover:shadow-[0_0_15px_#f43f5e] hover:scale-110 hover:text-pink-500 rounded-full p-2"
          >
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-2 px-4"
          >
            {navItems.map((route) => (
              <motion.li
                key={route}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href={`/${route}`}
                  className="block text-gray-200 px-4 py-2 rounded-lg transition-colors hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
