import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';

import * as configActions from './store/actions/configActions';
import * as genreActions from './store/actions/genreActions';

import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import Movies from './containers/Movies/Movies';
import MovieInfo from './containers/Movies/MovieInfo';
import TV from './containers/TV/TV';
import TVInfo from './containers/TV/TVInfo';
import NotFound from './components/NotFound/NotFound';

import './App.css';

// https://github.com/express-labs/pure-react-carousel#-tutorial
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Container">
          <Switch>
            <Route 
              path="/movies/popular" 
              exact
              key="popularMovies" 
              render={(props) => <Movies {...props} type="popularMovies"/>} />
            <Route 
              path="/movies/topRated" 
              exact
              key="topRatedMovies" 
              render={(props) => <Movies {...props} type="topRatedMovies"/>} />
            <Route 
              path="/movies/upcoming" 
              exact
              key="upcomingMovies" 
              render={(props) => <Movies {...props} type="upcomingMovies"/>} />
            <Route 
              path="/movies/nowPlaying"
              exact 
              key="nowPlayingMovies" 
              render={(props) => <Movies {...props} type="nowPlayingMovies"/>} />
            <Route path="/movies/:title/:id" exact component={MovieInfo} />
            <Route
              path="/tv/popular"
              exact
              key="popularTV"
              render={(props) => <TV {...props} type="popularTV" />} />
            <Route
              path="/tv/topRated"
              exact
              key="topRatedTV"
              render={(props) => <TV {...props} type="topRatedTV" />} />
            <Route
              path="/tv/onAir"
              exact
              key="onTheAirTV"
              render={(props) => <TV {...props} type="onTheAirTV" />} />
            <Route
              path="/tv/onAirToday"
              exact
              key="onTheAirTodayTV"
              render={(props) => <TV {...props} type="onTheAirTodayTV" />} />
            <Route path="/tv/:title/:id" exact component={TVInfo} />
            <Route path="/search" component={Search} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound}/>
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
