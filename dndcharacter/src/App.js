import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RaceSelection from './components/RaceSelection';
import Race from './components/Race';
import ClassSelection from './components/ClassSelection';
import CharClass from './components/Class';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/classes/:id'>
        <CharClass/>
      </Route>
      <Route exact path='/classes'>
        <ClassSelection/>
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
