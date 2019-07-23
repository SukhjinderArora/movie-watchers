import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ToggleButton from '../ToggleButton/ToggleButton';
import Logo from '../../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import SearchButton from '../../UI/SearchButton/SearchButton';

import classes from './Toolbar.module.css';

class Toolbar extends Component {
  render() {
    return (
      <header className={classes.Toolbar}>
        <div className={classes.ToggleButton}>
          <ToggleButton onClickHandler={this.props.toggleButtonClickHandler}/>
        </div>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <SearchButton color="#55AA29" width="18" height="18" onClickHandler={this.onClickSearchHandler}/>
      </header>
    );
  }
}

export default withRouter(Toolbar);
