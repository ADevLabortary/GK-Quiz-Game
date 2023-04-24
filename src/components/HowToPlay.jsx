import React from "react";

const HowToPlaySection = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:cursor-pointer hover:shadow-gray-500 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Step 1: Choose Your Difficulty Level
            </h3>
            <p className="text-gray-600 ">
              There are 10 levels of difficulty, ranging from 1-10. Each level
              consists of 10 questions with 3 related words for each question.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:cursor-pointer hover:shadow-gray-500 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Step 2: Read the Question and Related Words
            </h3>
            <p className="text-gray-600 ">
              Each question will give you 3 related words. Your task is to
              choose the two words that are most closely related to the first 3
              words in the question.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
