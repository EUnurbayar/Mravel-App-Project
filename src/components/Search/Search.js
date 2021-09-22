import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Search() {
   const initialState ={
        searchtype: '',
    }
const history =useHistory();
     const [formState, setFormState] = useState(initialState);
        function handleSubmit(event) {
         event.preventDefault();
         history.push(`/details/${formState.searchtype}`)
         setFormState(initialState);
    }

    function handleChange(event) { 
        setFormState({...formState, [event.target.id]: event.target.value});
    }
    return (
        < div className="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchtype"> ✨ Character Name: </label>
                <input onChange={handleChange} type="text" value={formState.searchtype} id='searchtype'/>
                <button className="submit-btn"> 💥 submit </button>
            </form>
        
        </div>
    );
}

export default Search;