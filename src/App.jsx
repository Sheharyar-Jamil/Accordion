import React, { useState } from "react"
import data from "./data"
import Questions from "./components/Question"

function App() {

  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return(
            <Questions key={question.id} title={question.title} info={question.info}/>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
