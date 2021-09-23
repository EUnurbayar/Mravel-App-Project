import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

function CharactersDetails() {
    const [character, setCharacter] = useState(null);
    const {name} = useParams();
    const [search, setSearch]=useState(false);
    const [error, setError] = useState(false)
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_MARVEL_APP_KEY}`;
  
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setSearch(true)
    
                if(res.data.results.length === 0){
                setCharacter(null)
                setError(true)
                } else {
                    setCharacter(res.data.results[0])
                }       
            })
            .catch((error) => {

            } )

    },[])

 if(search && !character && error){

    return <h1>❌ WRONG NAME❗️❗️❗️ PLEASE PRESS ON SEARCH AND TYPE NAME AGAIN</h1>
            
}
if(!character){
    return null;
}

    return ( 
        <div className="char-dtl" >
                 <div>
                     <h1 className="char-name"> ★ {character.name} ★ </h1>
                     <p className='descrition'>{character.description}</p>
                 </div>
                 <img className="char-img" src={character.thumbnail && character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.image} />
           
            <div className='li-container' key={character.id}>
                <div clsassName='comics-li'>
                    <h1>COMICS</h1>
                    {character.comics && character.comics.items.map((item) => (
                    <li> 💥 COMICS NAME: - {item.name} </li>
                     ))}  
                </div>
            
                 <div clsassName='series-li'>
                      <h1>SERIES</h1>
                      {character.series && character.series.items.map((item) => (
                      <li> 🔥 SERIES NAME: - {item.name} </li>
                      ))}
                 </div>
             </div> 
            
        </div>
        
    );
              
  }  
  
  export default CharactersDetails;