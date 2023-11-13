import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for Home component

function Home() {
  return (
    <div className="centered">
      <h1>Happy 3rd Anniversary!</h1>
	  <h1>I love you bb &lt;3</h1>
      <div className="nav-links">
        <Link to="/message" className="nav-link">
          Anniversary Message
        </Link>
        {' | '}
        <Link to="/quiz" className="nav-link">
          Anniversary Quiz
        </Link>
      </div>
    </div>
  );
}

export default Home;
