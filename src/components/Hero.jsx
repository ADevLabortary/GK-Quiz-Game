import React from "react";
import HeroImage from "../assets/hero-words.png";

function Hero() {
  return (
    <>
      <div className="bg-gray-800 flex">
        <div className="flex flex-col justify-center items-center mx-auto px-6 py-32">
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
        <div className="container mx-auto px-6 py-32">
             <img className="h-6 w-5" src={HeroImage} alt="hero" />
        </div>
       
      </div>
    </>
  );
}

export default Hero;
