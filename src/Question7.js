// src/Question7.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question7({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Luka') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Luka';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Koji Sushi Bar', 'La Tapería', 'Luka', 'Coucou Authentic Swiss'];

    return (
    <div>
      {answerOptions.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer)}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

  return (
    <div className="centered">
      <h1>Question 7</h1>
      <p>Where did we went on our 2nd date?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Luka'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question8">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question7;
