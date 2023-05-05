import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    // Navigation bar
    <>
      <nav className="fixed w-full z-10 bg-yellow-300 ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-black">
              <a href="/" className="text-3xl font-bold">
                GK Quiz
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
                className=" hover:bg-blue-400 mx-2 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/how-to-play"
                className=" hover:bg-blue-400 mx-2 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Tutorial
              </Link>
              <Link
                to="/contact"
                className=" hover:bg-blue-400 mx-2 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
