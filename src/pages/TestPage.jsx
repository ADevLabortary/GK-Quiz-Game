import React, { useState } from "react";
import QuizGame from "../components/QuizGame";
import SetupQuiz from "../components/SetupQuiz";

function TestPage() {
  const [started, setStarted] = useState(false);
  const [data, setData] = useState();

  return (
    <div>
      {started ? (
        <QuizGame data={data} setStarted={setStarted} />
      ) : (
        <SetupQuiz setData={setData} setStarted={setStarted} />
      )}
    </div>
  );
}

export default TestPage;
