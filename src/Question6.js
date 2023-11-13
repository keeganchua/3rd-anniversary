// src/Question6.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question6({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Interstellar') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Interstellar';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Inception', 'Interstellar', 'The Dark Knight', 'The Wanted'];

    return answerOptions.map((answer, index) => (
      <button
        key={index}
        onClick={() => handleAnswerClick(answer)}
        style={{ margin: '0 10px' }}
      >
        {answer}
      </button>
    ));
  };

  return (
    <div className="centered">
      <h1>Question 6</h1>
      <p>Which is my favourite movie of all time?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Interstellar'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question7">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question6;
