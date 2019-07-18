import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

import classes from './Navbar.module.css';
import SearchIcon from '../../UI/SearchIcon/SearchIcon';

class Navbar extends Component {
  state = {
    searchInput: ''
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

  render() {
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
            <li className={classes.NavItem}>
              <NavLink to="/movies" activeClassName={classes.NavItem_active}>Movies</NavLink>
              <ul className={[classes.Dropdown, classes.DropdownLeft].join(' ')}>
                <li>
                  <NavLink to="/movies/popular" activeClassName={classes.Dropdown_link_active}>Popular</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/topRated" activeClassName={classes.Dropdown_link_active}>Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/upcoming" activeClassName={classes.Dropdown_link_active}>Upcoming</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/nowPlaying" activeClassName={classes.Dropdown_link_active}>Now Playing</NavLink>
                </li>
              </ul>
            </li>
            <li className={classes.NavItem}>
              <NavLink to="/tv" activeClassName={classes.NavItem_active}>TV</NavLink>
              <ul className={[classes.Dropdown, classes.DropdownRight].join(' ')}>
                <li>
                  <NavLink to="/tv/popular" activeClassName={classes.Dropdown_link_active}>Popular</NavLink>
                </li>
                <li>
                  <NavLink to="/tv/topRated" activeClassName={classes.Dropdown_link_active}>Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="/tv/onAir" activeClassName={classes.Dropdown_link_active}>On Air</NavLink>
                </li>
                <li>
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