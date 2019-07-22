import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

import classes from './Navbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchForm from '../SearchForm/SearchForm';
import SearchIcon from '../../UI/Icons/SearchIcon/SearchIcon';

class Navbar extends Component {
  state = {
    searchInput: '',
    isDropdownOpen: false,
    activeDropdown: 1
  };

  onSubmitSearchHandler = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/search',
      search: `?query=${encodeURIComponent(this.state.searchInput)}`,
    });
    this.setState({
      searchInput: ''
    });
  };

  onInputChangeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  };

  onMouseEnterHandler = (activeDropdown) => {
    this.setState({
      isDropdownOpen: true,
      activeDropdown
    });
  };

  onMouseLeaveHandler = () => {
    this.setState({
      isDropdownOpen: false,
    });
  };

  onMenuItemClickHandler = () => {
    this.setState({
      isDropdownOpen: false
    });
  };

  render() {
    return (
      <nav className={classes.Navbar}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.Navigation}>
          <SearchForm 
            searchHandler={this.onSubmitSearchHandler} 
            searchInput={this.state.searchInput} 
            inputChangeHandler={this.onInputChangeHandler}/>
          <NavigationItems 
            mouseEnterHandler={this.onMouseEnterHandler} 
            mouseLeaveHandler={this.onMouseLeaveHandler}
            menuItemClickHandler={this.onMenuItemClickHandler}
            dropDownOpen={this.state.isDropdownOpen}
            activeDropdown={this.state.activeDropdown}/>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);