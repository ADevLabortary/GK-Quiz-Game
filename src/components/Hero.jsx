import React from "react";

function Hero({ navigate }) {
  return (
    <>
      <div className="flex items-center justify-center font-sans h-screen bg-slate-200">
        <div className="bg-white shadow-xl h-[500px] rounded-lg w-[800px] p-6 flex items-center">
          <div className="flex-1 text-center mr-16">
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">
              Test your general knowledge
            </h1>
            <p className="text-gray-700 mb-8">
              Challenge yourself with our fun and engaging general knowledge
              quiz game.
            </p>
            <button
              onClick={() => navigate("/test")}
              className="bg-yellow-400 outline-dashed font-bold px-3 py-2 rounded-md w-full text-center hover:scale-105 hover:shadow-md hover:bg-yellow-300 transition-transform ease-in-out"
            >
              Get started
            </button>
          </div>
          <div className="hidden sm:flex justify-center items-center md:w-[32.25rem] lg:w-[20.25rem] h-auto">
            <img
              src="https://img.freepik.com/free-vector/hand-drawing-illustration-creative-ideas-concept_53876-28456.jpg"
              alt="hero"
              className="h-auto w-56 outline-dashed outline-white filter invert drop-shadow-lg rounded-lg object-position-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
