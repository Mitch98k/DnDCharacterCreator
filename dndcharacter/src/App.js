import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RaceSelection from './components/RaceSelection';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <route path='/races'>
        <RaceSelection/>
      </route>
    </div>
  );
}

export default App;
