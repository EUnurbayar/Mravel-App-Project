import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

function CharactersDetails() {
    const [character, setCharacter] = useState({});
    const {name} = useParams();
    
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_MARVEL_APP_KEY}`;
  
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setCharacter(res.data.results[0])
                console.log(res.data.results[0])
            })
            .catch((error) => {
               console.log("error") 
               
            })
    
    }, [url])
   
    return ( 
       
    
        <div className="char-dtl" key={character.id}>
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