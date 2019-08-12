import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    isSideDrawerOpen: false
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

  render() {
    return (
      <div>
        <div className={classes.Toolbar}>
          <Toolbar toggleButtonClickHandler={this.onToggleButtonClickHandler} />
        </div>
        <div className={classes.Navbar}>
          <Navbar />
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
