import React from 'react';

import ToggleButton from '../ToggleButton/ToggleButton';
import Logo from '../../Logo/Logo';
import SearchButton from '../../UI/SearchButton/SearchButton';
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
      <SearchButton color="#55AA29" width="18" height="18"/>
    </header>
  );
};

export default Toolbar;
