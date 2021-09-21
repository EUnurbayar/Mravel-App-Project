import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Search(props) {
    const initialState ={
        searchtype: '',

    }
const history =useHistory();

    const [formState, setFormState] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        history.push(`/details/${formState.searchtype}`)
        console.log(formState);
        setFormState(initialState);
    }

    function handleChange(event) { 
        setFormState({...formState, [event.target.id]: event.target.value});
    }
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchtype">Character Name: </label>
                <input onChange={handleChange} type="text" value={formState.searchtype} id='searchtype'/>
                <button className="search-container">submit</button>
            </form>
        </div>
    );
}

export default Search;