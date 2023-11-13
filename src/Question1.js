// src/Question1.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question1({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct and update the score
    if (answer === 'Lavo') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Lavo';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Monti', 'Altro Zafferano', 'Lavo', 'UNA at The Alkaff Mansion'];

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
      <h1>Question 1</h1>
      <p>Where did we eat for our 1st Anniversary dinner?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Lavo'.</p>
          )}
          <p>Your current money: ${score}</p>
          <button>
            <Link to="/quiz/question2">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question1;
