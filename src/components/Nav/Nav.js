import React from 'react';
import {Link} from 'react-router-dom'


function Nav({characters}) {
    return (
        <div className="nav-container">
            <nav>
                <Link to='/search' clasName="select">Search</Link>
                <h1>My Favorite Marvel</h1>
                <Link to='/nav' className="home"> Home</Link>
            </nav>
           
           
        </div>
    );
}

export default Nav;