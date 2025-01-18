import React from 'react'
import Headers from './Components/Headers'
import Quiz from './Components/Quiz'
import QuestionTimer from './Components/QuestionTimer'

const App = () => {
  return (
    <div><Headers/>
    
    <main>
        <Quiz/>
    </main>
    </div>
  )
}

export default App
