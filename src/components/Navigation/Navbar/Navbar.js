import React, { useState } from 'react';

import classes from './Navbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchForm from '../SearchForm/SearchForm';

const Navbar = (props) => {
  const [isDropdownOpen, setDropdownState] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(1);

  const onMouseEnterHandler = (activeDropdown) => {
    setDropdownState(true);
    setActiveDropdown(activeDropdown);
  };

  const onMouseLeaveHandler = () => {
    setDropdownState(false);
  };

  const onMenuItemClickHandler = () => {
    setDropdownState(false);
  };

  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Navigation}>
        <SearchForm />
        <NavigationItems
          mouseEnterHandler={onMouseEnterHandler}
          mouseLeaveHandler={onMouseLeaveHandler}
          menuItemClickHandler={onMenuItemClickHandler}
          dropDownOpen={isDropdownOpen}
          activeDropdown={activeDropdown} />
      </div>
    </nav>
  );
};

export default Navbar;