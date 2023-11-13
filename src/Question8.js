// src/Question8.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question8({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Tasmania') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Tasmania';
  };

  const resetScoreAndNavigateHome = () => {
    // Reset the score to 0
    setScore(0);
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Tasmania', 'Bangkok', 'Bali', 'Tokyo'];

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
      <h1>Question 8</h1>
      <p>Where did we go for our first oversea trip (msia not counted)?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Tasmania'.</p>
          )}
          <p>Your final money: ${score}</p>
          {/* Navigate to the next question or result page */}
           <button>
            <Link to="/" onClick={resetScoreAndNavigateHome}>
              Back to Home
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question8;
