import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import RaceSelection from './components/RaceSelection';
import Race from './components/Race';
import ClassSelection from './components/ClassSelection';
import CharClass from './components/Class';
import BackgroundSelection from './components/BackgroundSelection';
import Background from './components/Background';
import AlignmentSelection from './components/AlignmentSelection';
import Alignment from './components/Alignment';
import AbilityScores from './components/AbilityScores';
import Personality from './components/Personality';
import './App.css';


function App() {
  return (
      <Switch>
        <Route path='/personality'>
          <Personality/>
        </Route>
        <Route path='/ability-scores'>
          <AbilityScores/>
        </Route>
        <Route path='/alignments/:id'>
          <Alignment/>
        </Route>
        <Route path='/alignments'>
          <AlignmentSelection/>
        </Route>
        <Route path='/backgrounds/:id'>
          <Background/>
        </Route>
        <Route path='/backgrounds'>
          <BackgroundSelection/>
        </Route>
        <Route path='/classes/:id'>
          <CharClass/>
        </Route>
        <Route path='/classes'>
          <ClassSelection/>
        </Route>
        <Route path='/races/:id'>
          <Race/>
        </Route>
        <Route path='/races'>
          <RaceSelection/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
  );
};

export default App;
