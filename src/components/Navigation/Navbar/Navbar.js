import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <Link to="/" className={classes.Logo}>MovieWatchers</Link>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>Movies</li>
        <li className={classes.NavItem}>TV</li>
      </ul>
    </nav>
  );
};

export default Navbar;