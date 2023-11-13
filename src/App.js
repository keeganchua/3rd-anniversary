// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Message from './Message';
import Quiz from './Quiz';
import './App.css';

function Home() {
  return (
    <div className="centered">
      <h1>Happy 3rd Anniversary bb!</h1>
      <div>
        <Link to="/message">Go to Message</Link>
        {' | '}
        <Link to="/quiz">Go to Quiz</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
