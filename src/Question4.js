// src/Question4.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question4({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === '12 Sep 2020') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === '12 Sep 2020';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['12 Sep 2020', '14 Sep 2020', '20 Sep 2020', '21 Sep 2020'];

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
      <h1>Question 4</h1>
      <p>When did we first met?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is '12 Sep 2020'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question5">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question4;
