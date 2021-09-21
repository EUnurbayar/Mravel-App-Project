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
        //  console.log(formState);
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
            
            {/* <img src="" alt="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d97e298-a1e83137-7784-467d-b598-d8706e9067f5.png/v1/fill/w_1024,h_683,q_80,strp/marvel_cinematic_universe___heroes_by_mrsteiners_d97e298-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kOTdlMjk4LWExZTgzMTM3LTc3ODQtNDY3ZC1iNTk4LWQ4NzA2ZTkwNjdmNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.efxH6Lc5YO8acvVXlifWWjL8DzY53eVamLbmEuCBuhY" /> */}
        
        </div>
    );
}

export default Search;