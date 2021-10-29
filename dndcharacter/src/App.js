import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RaceSelection from './components/RaceSelection';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/races'>
        <RaceSelection/>
      </Route>
      <Route exact path='/'>
        <Homepage/>
      </Route>
    </div>
  );
}

export default App;
