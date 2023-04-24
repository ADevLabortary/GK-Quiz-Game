import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  return (
    // Navigation bar
    <>
      <nav className="fixed w-full z-10 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <a href="#" className="text-xl font-bold">
                Word Quiz
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-gray-600 focus:outline-none focus:text-gray-300"
                aria-label="toggle menu"
              >
               <GiHamburgerMenu className="text-2xl" />
              </button>
            </div>
            <div className="hidden md:flex md:items-center">
              <a
                href="#"
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
