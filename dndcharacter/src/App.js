import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RaceSelection from './components/RaceSelection';
import Race from './components/Race';
import './App.css';
import BackgroundSelection from './components/BackgroundSelection';

function App() {
  return (
    <div>
      <Route exact path='/backgrounds'>
        <BackgroundSelection/>
      </Route>
      
      <Route path='/races/:id'>
        <Race/>
      </Route>
      <Route exact path='/races'>
        <RaceSelection/>
      </Route>
      <Route exact path='/'>
        <Homepage/>
      </Route>
    </div>
  );
}

export default App;
