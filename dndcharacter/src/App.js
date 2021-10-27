import React from 'react';
import { Route } from 'react-router-dom';
import homePage from './components/homePage'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <homePage/>
      </Route>
    </div>
  );
}

export default App;
