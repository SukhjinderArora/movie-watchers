import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';

import * as configActions from './store/actions/configActions';
import * as genreActions from './store/actions/genreActions';
import * as actionTypes from './store/actions/actionTypes';
import { getDataAsync } from './store/actions/dataActions';

import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';
import TV from './containers/TV/TV';

class App extends Component {
  componentDidMount() {
    // this.props.getConfig();
    // this.props.getMovieGenres();
    // this.props.getTVGenres();

    this.props.getData('/movie/popular', actionTypes.GET_POPULAR_MOVIES);
    this.props.getData('/movie/top_rated', actionTypes.GET_TOP_RATED_MOVIES);
    this.props.getData('/tv/popular', actionTypes.GET_POPULAR_TV);
    this.props.getData('/tv/top_rated', actionTypes.GET_TOP_RATED_TV);
    this.props.getData('/trending/all/week', actionTypes.GET_TRENDING);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movie/:title/:id" component={Movie}/>
          <Route path="/tv/:title/:id" component={TV}/>
          <Route path="/" exact component={Home} />
          <Route render={() => <h1>404 Page Not Found!</h1>}/>
        </Switch>
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
    getData: (path, actionType) => dispatch(getDataAsync(path, actionType)),
  }
};
export default connect(null, mapDispatchToProps)(App);
