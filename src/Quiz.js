import React from 'react';
import { Link } from 'react-router-dom';

function Quiz() {
  return (
    <div className="centered">
      <h2>Welcome to the Anniversary Quiz!</h2>
      <p>There will be a total of 8 questions. For every correct answer you will be rewarded $5. Click start to begin!</p>
	  <button>
        <Link to="/quiz/question1">Start</Link>
      </button>
    </div>
  );
}

export default Quiz;
