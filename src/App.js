import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Layout from './containers/Layout/Layout';
import * as configActions from './store/actions/configActions';
import * as genreActions from './store/actions/genreActions';

class App extends Component {
  componentDidMount() {
    this.props.getConfig();
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getConfig: () => dispatch(configActions.getConfigAsync()),
    getMovieGenres: () => dispatch(genreActions.getMovieGenresAsync()),
    getTVGenres: () => dispatch(genreActions.getTVGenresAsync())
  }
};
export default connect(null, mapDispatchToProps)(App);
