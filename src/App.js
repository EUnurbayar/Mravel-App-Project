import './App.css';
import { useState, useEffect } from 'react'
import { Route, Link} from 'react-router-dom';
import CharactersDetails from './components/CharactersDtails/CharactersDetails'
// import Character from './components/Character/Character';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';



function App() {
  return (
    <div className="App">
    
       <Nav /> 
      <Route path="/search" exact render={()=> <Search />}/>
      {/* <Route path="/" exact render={() => <Character /> } /> */}
     <Route path="/details/:name" render={() => <CharactersDetails />} />
     </div>

  );
}

export default App;
