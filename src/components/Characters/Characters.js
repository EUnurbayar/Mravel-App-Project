import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Character() {
    const [characters, setCharacters] = useState([])
    const name = `thor`
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=9cc0f353322c107d90815f659fa283a3`
    
     useEffect(() => {
         fetch(url)
            .then((res) => res.json())
            .then((res) => {setCharacters(res.data.results)
                console.log(res)
            })
            .catch(console.error)
     },[])
     if(!characters.length){
        return <p>Loading character's image</p>
    }
    return (
        <div className='characters'>
            {characters.map((character) => {
                return (
                    <Link to={`/details/${character.name}`} key={character.name}>
                        <div className='char'>
                            <image 
                            src={character.name}
                            alt={character.name}
                            />
                        </div>
                    </Link>
                )
            })

            }
            
        </div>
    )
}

export default Character;