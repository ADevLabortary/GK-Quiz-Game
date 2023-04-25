import React from "react";
import { stepsToPlay } from "../utils/constants";

const HowToPlaySection = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stepsToPlay.map(({stepNumber, stepText},index)=>(
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:cursor-pointer hover:shadow-gray-500 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Step {stepNumber}:
            </h3>
            <p className="text-gray-600 ">
              {stepText}
            </p>
          </div>
          ))
          
}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
