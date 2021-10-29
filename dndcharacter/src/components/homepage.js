import React, {useState, useEffect} from "react";
import '../css/Common.css';
import '../css/Homepage.css';

function Homepage() {
  return (
    <div className="home">
      <header className="home-header">
       <h1>Dungeons and Dragons</h1>
       <h2>5th Edition Character Creator</h2>
      </header>
      <body className="home-body">
        <button className="btn">
          Create your character
        </button>
      </body>
    </div>
  );
}

export default Homepage;