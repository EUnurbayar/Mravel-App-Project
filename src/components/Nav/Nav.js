import React from 'react';
import {Link} from 'react-router-dom';



function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <Link to='/search' className="select">🔍 Search</Link>
                <h1> Marvel Characters</h1>
                <Link to='/nav' className="home"> ✧ Home</Link>
                <Link to='/body' className="body"></Link>
            </nav>
        </div>
    );
}

export default Nav;