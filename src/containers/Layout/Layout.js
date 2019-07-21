import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <div className={classes.Toolbar}>
          <Toolbar />
        </div>
        <div className={classes.Navbar}>
          <Navbar />
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
