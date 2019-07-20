import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';

import { getMovieGenres } from './store/actions/moviesAction';
import { getTVGenres } from './store/actions/tvAction';

import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import Movies from './containers/Movies/Movies';
import MovieInfo from './containers/Movies/MovieInfo/MovieInfo';
import TV from './containers/TV/TV';
import TVInfo from './containers/TV/TVInfo/TVInfo';
import NotFound from './components/NotFound/NotFound';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }
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
              render={(props) => <Movies {...props} type="popularMovies" title="Popular Movies"/>} />
            <Route 
              path="/movies/topRated" 
              exact
              key="topRatedMovies" 
              render={(props) => <Movies {...props} type="topRatedMovies" title="Top Rated Movies"/>} />
            <Route 
              path="/movies/upcoming" 
              exact
              key="upcomingMovies" 
              render={(props) => <Movies {...props} type="upcomingMovies" title="Upcoming Movies"/>} />
            <Route 
              path="/movies/nowPlaying"
              exact 
              key="nowPlayingMovies" 
              render={(props) => <Movies {...props} type="nowPlayingMovies" title="Now Playing"/>} />
            <Route path="/movies/:title/:id" exact component={MovieInfo} />
            <Route
              path="/tv/popular"
              exact
              key="popularTV"
              render={(props) => <TV {...props} type="popularTV" title="Popular Shows"/>} />
            <Route
              path="/tv/topRated"
              exact
              key="topRatedTV"
              render={(props) => <TV {...props} type="topRatedTV" title="Top Rated Shows"/>} />
            <Route
              path="/tv/onAir"
              exact
              key="onTheAirTV"
              render={(props) => <TV {...props} type="onTheAirTV" title="On Air Shows"/>} />
            <Route
              path="/tv/onAirToday"
              exact
              key="onTheAirTodayTV"
              render={(props) => <TV {...props} type="onTheAirTodayTV" title="Airing Today"/>} />
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
    // getConfig: () => dispatch(configActions.getConfigAsync()),
    getMovieGenres: () => dispatch(getMovieGenres()),
    getTVGenres: () => dispatch(getTVGenres())
    // getTVGenres: () => dispatch(genreActions.getTVGenresAsync()),
  }
};
export default connect(null, mapDispatchToProps)(App);
