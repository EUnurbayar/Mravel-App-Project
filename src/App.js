import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Router, Link, Redirect } from 'react-router-dom';
import CharactersDetails from './components/CharactersDtails/CharactersDetails'
import Characters from './components/Characters/Characters';
function App() {
  return (
    <div className="App">
      
   
    {/* <Characters /> */}
    <Router path="/" exact component={Characters} />
    <Router path="/" exact component={CharactersDetails}/>
    </div>
  );
}

export default App;
