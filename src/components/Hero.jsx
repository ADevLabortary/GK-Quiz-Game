import React from "react";
import HeroImage from "../assets/hero-words.png";

function Hero() {
  return (
    <>
      <div className="bg-gray-800 flex justify-evenly items-center w-auto py-5">
        <div className="max-w-[75rem] mx-auto px-6 py-12 flex justify-evenly items-center">
          <div className="flex-col mr-[130px]">
            <h1 className="text-4xl font-bold text-white mb-2">
              Test your word knowledge
            </h1>
            <p className="text-gray-400 mb-8">
              Challenge yourself with our fun and engaging word quiz game.
            </p>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Get started
            </a>
          </div>
          <div>
            <img
              className="hidden sm:block md:w-[32.25rem] lg:w-[32.25rem] md:h-[29.5rem] lg:h-[29.5rem] filter invert drop-shadow-lg"
              src={HeroImage}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
