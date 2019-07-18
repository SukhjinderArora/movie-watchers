import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

import classes from './Navbar.module.css';
import SearchIcon from '../../UI/SearchIcon/SearchIcon';

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

  onMouseLeaveHandler = (activeDropdown) => {
    this.setState({
      isDropdownOpen: false,
      activeDropdown
    });
  };

  onMenuItemClickHandler = () => {
    this.setState({
      isDropdownOpen: false
    });
  };

  render() {
    const dropDownLeft = (this.state.activeDropdown === 1 && this.state.isDropdownOpen) ? classes.DropdownOpen : classes.DropdownClosed;
    const dropDownRight = (this.state.activeDropdown === 2 && this.state.isDropdownOpen) ? classes.DropdownOpen : classes.DropdownClosed;
    // const dropDown = this.state.isDropdownOpen ? classes.DropdownOpen : classes.DropdownClosed
    return (
      <nav className={classes.Navbar}>
        <Link to="/" className={classes.Logo}>MovieWatchers</Link>
        <div className={classes.Navigation}>
          <form action="" onSubmit={this.onSubmitSearchHandler} className={classes.SearchForm}>
            <input
              type="text"
              placeholder="Search Movies or TV Shows"
              value={this.state.searchInput}
              className={classes.SearchInput}
              onChange={this.onInputChangeHandler} />
            <button type="submit" className={classes.btnSearch}>
              <SearchIcon color="#8e8e8e" width="18" height="18"/>
            </button>
          </form>
          <ul className={classes.NavList}>
            <li className={classes.NavItem} onMouseEnter={(e) => this.onMouseEnterHandler(1)} onMouseLeave={(e) => this.onMouseLeaveHandler(1)}>
              <NavLink to="/movies" activeClassName={classes.NavItem_active}>Movies</NavLink>
              <ul className={[classes.Dropdown, classes.DropdownLeft, dropDownLeft].join(' ')}>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/movies/popular" activeClassName={classes.Dropdown_link_active}>Popular</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/movies/topRated" activeClassName={classes.Dropdown_link_active}>Top Rated</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/movies/upcoming" activeClassName={classes.Dropdown_link_active}>Upcoming</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/movies/nowPlaying" activeClassName={classes.Dropdown_link_active}>Now Playing</NavLink>
                </li>
              </ul>
            </li>
            <li className={classes.NavItem} onMouseEnter={(e) => this.onMouseEnterHandler(2)} onMouseLeave={(e) => this.onMouseLeaveHandler(2)}>
              <NavLink to="/tv" activeClassName={classes.NavItem_active}>TV</NavLink>
            <ul className={[classes.Dropdown, classes.DropdownRight, dropDownRight].join(' ')}>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/tv/popular" activeClassName={classes.Dropdown_link_active}>Popular</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/tv/topRated" activeClassName={classes.Dropdown_link_active}>Top Rated</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/tv/onAir" activeClassName={classes.Dropdown_link_active}>On Air</NavLink>
                </li>
                <li onClick={this.onMenuItemClickHandler}>
                  <NavLink to="/tv/onAirToday" activeClassName={classes.Dropdown_link_active}>On Air Today</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);