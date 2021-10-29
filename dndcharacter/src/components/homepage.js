import React from "react";
import { useHistory } from 'react-router-dom';
import '../css/Common.css';
import '../css/Homepage.css';

function Homepage() {
  const { push } = useHistory();

  return (
    <div className="home">
      <header className="home-header">
       <h1>Dungeons and Dragons</h1>
       <h2>5th Edition Character Creator</h2>
      </header>
      <body className="home-body">
        <button onClick={() => push('/races')} className="btn">
          Create your character
        </button>
      </body>
    </div>
  );
}

export default Homepage;