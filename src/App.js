import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';

import * as configActions from './store/actions/configActions';
import * as genreActions from './store/actions/genreActions';

import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Movies from './containers/Movies/Movies';
import MovieInfo from './containers/Movies/MovieInfo';
import TV from './containers/TV/TV';
import TVInfo from './containers/TV/TVInfo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Container">
          <Switch>
            <Route path="/movies/" component={Movies} />
            <Route path="/tv/" component={TV} />
            <Route path="/" exact component={Home} />
            <Route render={() => <h1>404 Page Not Found!</h1>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getConfig: () => dispatch(configActions.getConfigAsync()),
    getMovieGenres: () => dispatch(genreActions.getMovieGenresAsync()),
    getTVGenres: () => dispatch(genreActions.getTVGenresAsync()),
  }
};
export default connect(null, mapDispatchToProps)(App);
