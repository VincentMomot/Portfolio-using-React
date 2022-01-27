import React from 'react';
import {Link} from 'react-router-dom';

function header() {
  return(
      <header>
        <h1><a id="home" href="index.html">Vincent D Momot's Portfolio</a></h1>  
        <Link to='/'>Vincent D Momot's Portfolio</Link>
        <nav>
          <ul>
            <li><a href="work.html">My Work</a></li>
            <li><a href="resume.html">My Resume</a></li>
            <li><a href="games.html">Scratch Games</a></li>
          </ul>
        </nav>
        </header>
    );
  }


export default header;
