// src/Question3.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question3({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Bread') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Bread';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Lor Mee', 'Bread', 'Sweet & Sour Pork Rice', 'Pork Chop'];

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
      <h1>Question 3</h1>
      <p>What is my favourite food?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Bread'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question4">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question3;
