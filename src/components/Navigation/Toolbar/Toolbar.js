import React from 'react';

import ToggleButton from '../ToggleButton/ToggleButton';
import Logo from '../../Logo/Logo';
import Navbar from '../Navbar/Navbar';

import classes from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.ToggleButton}>
        <ToggleButton />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </header>
  );
};

export default Toolbar;
