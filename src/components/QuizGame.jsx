import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
function QuizGame({ data, setStarted }) {
  const [selectedOption, setSelectedOption] = useState();
  const [correctAnswer, setCorrectAnswer] = useState("a");
  const [currentQuestion, setCurrentQuestion] = useState(data.questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [score, setScore] = useState(0);
  // Variables that update on clicking next

  // console.log(data.questions[currentQuestionIndex]);

  const questionUpdater = () => {
    if (currentQuestionIndex >= data.questions.length) {
      setQuizEnded(true);
    } else {
      setCurrentQuestion(data.questions[currentQuestionIndex]);
      setCorrectAnswer(currentQuestion.answer);
      setCurrentQuestionIndex((prev) => prev + 1);
    }

    console.log(correctAnswer, currentQuestion);
  };
  const validityCheck = (opt, ans, callback) => {
    if (opt === ans) {
      setScore((prev) => prev + 1);
    }
    callback();
  };

  if (quizEnded) {
    return (
      <div className="flex items-center justify-center font-sans h-screen bg-slate-200">
        <div className="bg-white py-6 px-8 flex-col flex h-fit w-[500px] rounded-lg shadow-lg">
          <h1 className="text-5xl text-blue-600 font-sans font-bold text-center mb-6">
            Quiz Ended!
          </h1>
          <p className="text-2xl font-semibold font-mono text-center">
            Here is your final Score:{" "}
          </p>
          <span className="w-full text-center">
            <p
              className={`text-5xl font-sans ${
                score < 5 ? "text-red-500" : "text-green-600"
              } font-extrabold`}
            >
              {score}
            </p>
          </span>
          <button
            onClick={() => {
              setStarted(false);
              setScore(0);
            }}
            className="bg-green-400 rounded-md p-2 hover:bg-green-300 shadow-md mt-5 font-bold"
          >
            {" "}
            Play Again
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center font-sans h-screen bg-slate-200">
        <div className="bg-white py-6 px-8 flex-col flex h-fit w-[800px] rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-5 text-center">
            Question No {currentQuestion.questionNumber}
          </h1>
          <div id="question">
            <p className="text-3xl text-center">{currentQuestion.question}</p>
          </div>
          <div id="choices" className="grid gap-3 my-5 ">
            <button
              onClick={() => setSelectedOption("a")}
              className={`bg-blue-500  ${
                selectedOption === "a" ? "bg-purple-400" : "hover:bg-blue-400"
              } py-3 rounded-lg font-semibold text-lg text-white`}
            >
              {currentQuestion.options[0]}
            </button>
            <button
              onClick={() => setSelectedOption("b")}
              className={`bg-blue-500  ${
                selectedOption === "b" ? "bg-purple-400" : "hover:bg-blue-400"
              } py-3 rounded-lg font-semibold text-lg text-white`}
            >
              {currentQuestion.options[1]}
            </button>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={() => {
                validityCheck(selectedOption, correctAnswer, questionUpdater);
                setSelectedOption();
              }}
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
}

export default QuizGame;
