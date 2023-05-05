import React from "react";
import { stepsToPlay } from "../utils/constants";

const HowToPlaySection = () => {
  return (
    <section id="howtoplay" className="bg-slate-200  h-screen flex items-center py-12">
    <div className="container p-8 rounded-lg shadow-lg bg-white mx-auto px-4">
    <h2 className="text-4xl font-serif font-bold text-black text-center 
     rounded-lg py-2 mb-8">How to Play</h2>

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
        {stepsToPlay.map(({stepNumber, stepText},index)=>(
          <div key={index} className="bg-yellow-300 rounded-lg p-6 outline-dashed hover:cursor-pointer hover:shadow-xl transition duration-100 ease-in-out">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Step {stepNumber}:
            </h3>
            <p className="text-gray-600 ">
              {stepText}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default HowToPlaySection;
