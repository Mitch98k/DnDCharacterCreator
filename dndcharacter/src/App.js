import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <Homepage/>
      </Route>
    </div>
  );
}

export default App;
