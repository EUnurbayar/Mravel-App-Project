import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom'




function CharactersDetails() {
    const [characters, setCharacters] = useState([]);
    const {name} = useParams();
//    const name = `thor`
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=9cc0f353322c107d90815f659fa283a3`;
  
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setCharacters(res)
                console.log(res)
            })
            .catch(console.error)
    }, [])

    
    return ( 
        <div>
             <h1>{characters.name}</h1>
             <img 
                src={characters.image}
                alt={characters.name} 
             />
       </div>
        // <div>
        //     {characters.map((character) => {
        //         return (
        //            <div>
        //                 <h1>{character.name}</h1>
        //                 <img 
        //                 src={character.name}
        //                 alt={character.name} 
        //                 />
        //              </div>
        //     )
        // })}
        // </div> 
    );
  }
  
  export default CharactersDetails;