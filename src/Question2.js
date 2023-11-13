// src/Question2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question2({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Infinity') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Infinity';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Zero', '50%', '3000', 'Infinity'];

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
      <h1>Question 2</h1>
      <p>How much do you love me?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Infinity'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question3">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question2;
