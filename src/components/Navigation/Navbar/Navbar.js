import React from 'react';

import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <a href="/" className={classes.Logo}>MovieWatchers</a>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>Movies</li>
        <li className={classes.NavItem}>TV</li>
      </ul>
    </nav>
  );
};

export default Navbar;