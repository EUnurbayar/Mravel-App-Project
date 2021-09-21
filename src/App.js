import './App.css';
import { Route } from 'react-router-dom';
import CharactersDetails from './components/CharactersDtails/CharactersDetails';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
       <Nav /> 
       <Route path="/nav" exact render={() => <Body/>} />
       <Route path="/search" exact render={()=> <Search />}/>
       <Route path="/details/:name" render={() => <CharactersDetails />} />
    </div>
  );
}

export default App;
