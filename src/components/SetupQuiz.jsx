import React from "react";

function SetupQuiz() {
  return (
    <div className="flex items-center justify-center font-sans h-screen bg-slate-200">
      <div className="bg-white shadow-xl h-[500px] rounded-lg w-[430px] p-6">
        <h1 className="text-4xl font-semibold ">Setup Quiz</h1>
        <div id="accordionOptions" className="my-5">
          <div className="text-gray-700 mb-8">
            <p className="mb-2">Number of Questions</p>
            <div className="bg-gray-200 py-2 text-sm px-2 rounded-lg font-semibold">
              10
            </div>
          </div>
          <div className="text-gray-700 mb-8">
            <p className="mb-2">Select Category</p>
            <select className="bg-gray-200 py-2 text-sm px-1 rounded-lg w-full font-semibold">
             <option value="History">History</option>
             <option value="Geography">Geography</option>
             <option value="Science and Nature">Science and Nature</option>
             <option value="Literature">Literature</option>
             <option value="Arts and Entertainment">Arts and Entertainment</option>
             <option value="Sports and Games">Sports and Games</option>
             <option value="Current Affairs and Politics">Current Affairs and Politics</option>
             <option value="Technology and Innovation">Technology and Innovation</option>
             <option value="Food and Drink">Food and Drink</option>
             <option value="Mythology and Folklore">Mythology and Folklore</option>
             <option value="Language and Linguistics">Language and Linguistics</option>
             <option value="Religion and Philosophy">Religion and Philosophy</option>
             <option value="Famous People and Personalities">Famous People and Personalities</option>
            </select>
          </div>
          <div className="text-gray-700 mb-10">
            <p className="mb-2">Select Difficulty</p>
            <select className="bg-gray-200 w-full py-2 text-sm px-1 rounded-lg font-semibold">
              <option value="easy" >Easy</option>
              <option value="medium" >Medium</option>
              <option value="hard" >Hard</option>
            </select>
          </div>
        </div>
        <button className="bg-yellow-400 font-bold px-3 py-2 rounded-md w-full text-center hover:scale-105 hover:shadow-md hover:bg-yellow-300 transition-transform ease-in-out ">
            Start
        </button>
      </div>
    </div>
  );
}

export default SetupQuiz;
