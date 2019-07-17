import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

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
              <Link to="/">Movies</Link>
              <ul className={classes.Dropdown}>
                <li>
                  <Link to="/movies/popular">Popular</Link>
                </li>
                <li>
                  <Link to="/movies/topRated">Top Rated</Link>
                </li>
                <li>
                  <Link to="/movies/upcoming">Upcoming</Link>
                </li>
                <li>
                  <Link to="/movies/nowPlaying">Now Playing</Link>
                </li>
              </ul>
            </li>
            <li className={classes.NavItem}>
              <Link to="/">TV</Link>
              <ul className={classes.Dropdown}>
                <li>
                  <Link to="/tv/topRated">Popular</Link>
                </li>
                <li>
                  <Link to="/tv/popular">Top Rated</Link>
                </li>
                <li>
                  <Link to="/tv/onAir">On Air</Link>
                </li>
                <li>
                  <Link to="/tv/onAirToday">On Air Today</Link>
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