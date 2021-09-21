import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';






function CharactersDetails() {
    const [character, setCharacter] = useState({});
    const {name} = useParams();
    // const name ='hulk'
    
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_MARVEL_APP_KEY}`;
  
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setCharacter(res.data.results[0])
                console.log(res.data.results[0])
            })
            .catch(console.error)
    }, [])
   

    // function onClick (event){
    //     event.preventDefault();
        
     
    // }

    return ( 
        <div key={character.id}>
             <div>
                 <h1> {character.name} </h1>
                 <p>{character.description}</p>
             </div>
            <img src={character.thumbnail && character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
            <div className='li-container' key={character.id}>
           
             
            {character.comics && character.comics.items.map((item) => (
                 <li clsassName='comics-li' >Comics: {item.name}</li>
      
            ))}  

           
            {character.series && character.series.items.map((item) => (
                 <li clsassName='series-li'> {item.name}</li>
            ))}
                
             </div>
            
       </div>
        
    );
  }    
  
  export default CharactersDetails;