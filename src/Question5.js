// src/Question5.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question5({ setScore, score }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === 'Heng Quan') {
      // Update the score by adding 5 points for a correct answer
      setScore(score + 5);
    }
  };

  const isCorrectAnswer = () => {
    return selectedAnswer === 'Heng Quan';
  };

  const renderAnswerOptions = () => {
    if (selectedAnswer) {
      return null; // Don't render answer options once an answer is selected
    }

    const answerOptions = ['Jackson Wang', 'Zoro (guy actor)', 'Bosco', 'Heng Quan'];

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
      <h1>Question 5</h1>
      <p>Who is Yanni's future husband?</p>
      <div>{renderAnswerOptions()}</div>
      {selectedAnswer && (
        <div>
          {isCorrectAnswer() ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is 'Heng Quan'.</p>
          )}
          <p>Your current money: ${score}</p>
          {/* Navigate to the next question or result page */}
          <button>
            <Link to="/quiz/question6">Next Question</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question5;
