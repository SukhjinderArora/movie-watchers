import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';
import TMDBLogo from '../../assets/images/tmdb-logo.svg'

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <nav>
        <h3>Movies</h3>
        <ul>
          <li>
            <Link to="/movies/popular">Popular movies</Link>
            </li>
          <li>
              <Link to="/movies/upcoming">Upcoming movies</Link>
          </li>
          <li>
              <Link to="/movies/nowPlaying">Now playing movies</Link>
          </li>
          <li>
            <Link to="/movies/topRated">Toprated movies</Link></li>
        </ul>
      </nav>
      <nav>
        <h3>TV</h3>
        <ul>
          <li><Link to="/tv/topRated">Top rated TV shows</Link></li>
          <li><Link to="/tv/popular">Popular TV shows</Link></li>
          <li><Link to="/tv/onAir">On The Air TV shows</Link></li>
          <li><Link to="/tv/onAirToday">On The Air Today TV shows</Link></li>
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