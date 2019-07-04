import React from 'react';

import classes from './Footer.module.css';
import TMDBLogo from '../../assets/images/tmdb-logo.svg'

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <nav>
        <h3>Movies</h3>
        <ul>
          <li>Top rated movies</li>
          <li>Upcoming movies</li>
          <li>Now playing movies</li>
          <li>Popular movies</li>
        </ul>
      </nav>
      <nav>
        <h3>TV</h3>
        <ul>
          <li>Top rated TV shows</li>
          <li>Popular TV shows</li>
          <li>On the air TV shows</li>
          <li>Airing today TV shows</li>
        </ul>
      </nav>
      <div>
        <img src={TMDBLogo} alt="TMDB Logo" className={classes.TMDBLogo}/>
        <p className={classes.CopyRight}>Designed and Developed by Sukhjinder Arora</p>
      </div>
    </footer>
  );
};

export default Footer;