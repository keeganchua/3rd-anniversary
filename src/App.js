// src/App.js

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './Message';
import Quiz from './Quiz';
import './App.css';
import Home from './Home';
import Question1 from './Question1'; // Import the Question1 component
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';

function App() {
  // State to manage the score
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/question1" element={<Question1 setScore={setScore} score={score} />} />
        <Route path="/quiz/question2" element={<Question2 setScore={setScore} score={score} />} />
		<Route path="/quiz/question3" element={<Question3 setScore={setScore} score={score} />} />
		<Route path="/quiz/question4" element={<Question4 setScore={setScore} score={score} />} />
		<Route path="/quiz/question5" element={<Question5 setScore={setScore} score={score} />} />
		<Route path="/quiz/question6" element={<Question6 setScore={setScore} score={score} />} />
		<Route path="/quiz/question7" element={<Question7 setScore={setScore} score={score} />} />
		<Route path="/quiz/question8" element={<Question8 setScore={setScore} score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
