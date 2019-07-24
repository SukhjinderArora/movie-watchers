import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    searchInput: '',
    isDropdownOpen: false,
    activeDropdown: 1,
    isSideDrawerOpen: false
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

  onToggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  sideDrawerCloseHandler = () => {
    this.setState({
      isSideDrawerOpen: false
    });
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
      <div>
        <div className={classes.Toolbar}>
          <Toolbar toggleButtonClickHandler={this.onToggleButtonClickHandler} />
        </div>
        <div className={classes.Navbar}>
          <Navbar 
            onMouseEnterHandler={this.onMouseEnterHandler} 
            onMouseLeaveHandler={this.onMouseLeaveHandler}
            onMenuItemClickHandler={this.onMenuItemClickHandler}
            isDropdownOpen={this.state.isDropdownOpen}
            activeDropdown={this.state.activeDropdown}
            onSubmitSearchHandler={this.onSubmitSearchHandler}
            searchInput={this.state.searchInput}
            onInputChangeHandler={this.onInputChangeHandler}
            />
        </div>
        <SideDrawer open={this.state.isSideDrawerOpen} sideDrawerCloseHandler={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
