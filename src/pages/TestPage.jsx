import React, { useState } from 'react'
import QuizGame from '../components/QuizGame'
import SetupQuiz from '../components/SetupQuiz'

function TestPage() {
  const [started, setStarted] = useState(false)
  return (
    <div>
    {started?(  <QuizGame />): <SetupQuiz/>}
     </div>
  )
}

export default TestPage