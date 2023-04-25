import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  location = useLocation;
  console.log(location);
  return (
    // Navigation bar
    <>
      <nav className="fixed w-full z-10 bg-gray-700 ">
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
              
              <Link
                to="/"
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              {location.pathname == "/" && (
                <>
                  <a
                    href="#about"
                    className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
