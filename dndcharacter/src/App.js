import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
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
