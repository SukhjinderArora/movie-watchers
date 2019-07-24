import React from 'react';

import classes from './Navbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchForm from '../SearchForm/SearchForm';

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Navigation}>
        <SearchForm
          searchHandler={props.onSubmitSearchHandler}
          searchInput={props.searchInput}
          inputChangeHandler={props.onInputChangeHandler} />
        <NavigationItems
          mouseEnterHandler={props.onMouseEnterHandler}
          mouseLeaveHandler={props.onMouseLeaveHandler}
          menuItemClickHandler={props.onMenuItemClickHandler}
          dropDownOpen={props.isDropdownOpen}
          activeDropdown={props.activeDropdown} />
      </div>
    </nav>
  );
};

export default Navbar;