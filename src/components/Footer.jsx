import React from "react";

const Footer = () => {
  return (
    <footer className=" outline-dashed outline-red-600 py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-full md:w-auto md:mr-6 mb-4 md:mb-0">
            <a
              className="text-slate-900 text-center hover:text-slate-800 font-semibold text-lg"
              href="#"
            >
              GK Quiz - © All Rights Reserved
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

