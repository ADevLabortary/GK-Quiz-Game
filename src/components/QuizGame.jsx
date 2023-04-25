import { useState } from "react";

function QuizGame() {
  const [started, setStarted] = useState(false);
  const [question, setQuestion] = useState(null);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  // Define an array of questions with their options and correct answers
  const questions = [
    {
      id: 1,
      text: "What is the capital city of France?",
      options: ["Paris", "London", "Madrid", "Berlin"],
      answer: "Paris",
    },
    {
      id: 2,
      text: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter",
    },
    // Add more questions here
  ];

  // Define a function to select a random question from the array
  const getRandomQuestion = () => {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
  };

  // Define a function to handle the user's answer to a question
  const handleAnswer = (answer) => {
    if (answer === question.answer) {
      setScore(score + 1);
    }
    setLevel(level + 1);
    setQuestion(getRandomQuestion());
  };

  // Define a function to start the quiz game
  const startGame = () => {
    setStarted(true);
    setQuestion(getRandomQuestion());
    setLevel(1);
    setScore(0);
  };

  // If the game has not started yet, show a start button
  if (!started) {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://img5.goodfon.com/wallpaper/nbig/3/2f/linii-ugly-tekstura-obiom-seryi-tiomnyi-fon.jpg)",
        }}
        className="bg-cover flex-col h-[100vh] w-[100vw] justify-center py-[130px] items-center text-center"
      >
        <h1 className="text-[120px]  font-serif text-white">
          Welcome to the Quiz Game!
        </h1>
        <button
          className="text-[60px] mt-8 bg-yellow-200 p-2 rounded-xl hover:shadow-white hover:shadow-lg"
          onClick={startGame}
        >
          Start
        </button>
      </div>
    );
  }

  // If the game has started, show the current question and options
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img5.goodfon.com/wallpaper/nbig/3/2f/linii-ugly-tekstura-obiom-seryi-tiomnyi-fon.jpg)",
      }}
      className="py-[180px] bg-cover flex-col h-[100vh] w-[100vw] justify-center  text-white items-center text-center"
    >
      <h1 className="text-[5rem] font-bold text-black bg-slate-300 ">
        Question {level}
      </h1>
      <p className="text-[3rem] text-black font-semibold bg-blue-200 w-full">
        {question.text}
      </p>
      {question.options.map((option) => (
        <button
          className="m-6 text-2xl bg-slate-300 text-black p-3 rounded-md hover:bg-white"
          key={option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
      <p className="text-yellow-300 font-bold text-xl">Score: {score}</p>
    </div>
  );
}

export default QuizGame;
