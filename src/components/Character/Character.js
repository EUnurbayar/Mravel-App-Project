import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Character() {
    const [character, setCharacter] = useState([])
    const name ='hulk'
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_MARVEL_APP_KEY}`
    
     useEffect(() => {

         fetch(url)
        //  console.log(url)
            .then((res) => res.json())
            .then((res) => {
                setCharacter(res.data.results[0])
                console.log(res.data.results[0])
            })
            .catch(console.error)
     },[]);

    return (
       
        <div className='btn-container'>
             <button className='comics-btn'  >Comics</button>
             
            {character.comics && character.comics.items.map((item) => (
                <p > Comics: {item.name}</p>
                 
            ))}  

             <button className='Series-btn'>SERIES</button>
            {character.series && character.series.items.map((item) => (
               
                <p> {item.name}</p>
            ))}
                
             </div>
    )
}

export default Character;