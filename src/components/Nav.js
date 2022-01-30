import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=> {
  return(
      <header>
        <h1><a id="home" href="index.html">Vincent D Momot's Portfolio</a></h1>  
        <Link to='/'>Vincent D Momot's Portfolio</Link>
        <nav>
          <ul>
            <li><Link to="/work">My Work</Link></li>
            <li><Link to="/resume">My Resume</Link></li>
            <li><Link to="/games">Scratch Games</Link></li>
          </ul>
        </nav>
        </header>
    );
  }


export default Nav;
