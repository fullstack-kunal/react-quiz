import React from 'react'
import QuizLogo from '../assets/quiz-logo.png'

const Headers = () => {
  return (
    <header style={{zIndex:200}}>
        <img src={QuizLogo} alt="" />
        <h1>React Quiz</h1>
    </header>
  )
}

export default Headers