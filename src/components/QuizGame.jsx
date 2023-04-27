import React, { useState } from "react";

function QuizGame() {
  const [selectedOption, setSelectedOption] = useState();
  const [correctAnswer, setCorrectAnswer] = useState('a')
  let score = 0
  const validityCheck = (opt, ans) =>{
      if(opt===ans){
       score += 1
        console.log(score)
      }
  }
  return (
    <div className="flex items-center justify-center font-sans h-screen bg-slate-200">
      <div className="bg-white py-6 px-8 flex-col flex h-fit w-[800px] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Question No 1</h1>
        <div id="question">
          <p className="text-3xl text-center">
            What is the name of the first president of Pakistan?
          </p>
        </div>
        <div id="choices" className="grid gap-3 my-5 ">
          <button
            onClick={() => setSelectedOption("a")}
            className={`bg-blue-500  ${
              selectedOption === "a" ? "bg-purple-400" : "hover:bg-blue-400"
            } py-3 rounded-lg font-semibold text-lg text-white`}
          >
            Liaqat Ali Khan
          </button>
          <button
            onClick={() => setSelectedOption("b")}
            className={`bg-blue-500  ${
              selectedOption === "b" ? "bg-purple-400" : "hover:bg-blue-400"
            } py-3 rounded-lg font-semibold text-lg text-white`}
          >
            Quaid E Azam
          </button>
        </div>
        <div className="flex w-full justify-center">
          <button
          onClick={validityCheck(selectedOption, correctAnswer)}
            disabled={selectedOption ? false : true}
            className={` px-16 ${
              selectedOption
                ? " hover:bg-yellow-400 bg-yellow-500 "
                : "bg-yellow-600"
            } py-2 rounded-lg font-bold text-lg text-black `}
          >
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
