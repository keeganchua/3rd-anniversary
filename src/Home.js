import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for Home component

function Home() {
  return (
    <div className="centered">
      <h1>Happy 3rd Anniversary bb!</h1>
      <div className="nav-links">
        <Link to="/message" className="nav-link">
          Go to Message
        </Link>
        {' | '}
        <Link to="/quiz" className="nav-link">
          Go to Quiz
        </Link>
      </div>
    </div>
  );
}

export default Home;
