import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch, Redirect } from 'react-router-dom';

import { getMovieGenres } from './store/actions/moviesAction';
import { getTVGenres } from './store/actions/tvAction';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Movies from './components/Movies/Movies';
import MovieInfo from './components/Movies/MovieInfo/MovieInfo';
import TV from './components/TV/TV';
import TVInfo from './components/TV/TVInfo/TVInfo';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route
              path="/movies/popular"
              exact
              key="popularMovies"
              render={(props) => <Movies {...props} type="popularMovies" title="Popular Movies" />} />
            <Route
              path="/movies/topRated"
              exact
              key="topRatedMovies"
              render={(props) => <Movies {...props} type="topRatedMovies" title="Top Rated Movies" />} />
            <Route
              path="/movies/upcoming"
              exact
              key="upcomingMovies"
              render={(props) => <Movies {...props} type="upcomingMovies" title="Upcoming Movies" />} />
            <Route
              path="/movies/nowPlaying"
              exact
              key="nowPlayingMovies"
              render={(props) => <Movies {...props} type="nowPlayingMovies" title="Now Playing" />} />
            <Route path="/movies/:title/:id" exact component={MovieInfo} />
            <Redirect from="/movies" to="/movies/popular"/>
            <Route
              path="/tv/popular"
              exact
              key="popularTV"
              render={(props) => <TV {...props} type="popularTV" title="Popular Shows" />} />
            <Route
              path="/tv/topRated"
              exact
              key="topRatedTV"
              render={(props) => <TV {...props} type="topRatedTV" title="Top Rated Shows" />} />
            <Route
              path="/tv/onAir"
              exact
              key="onTheAirTV"
              render={(props) => <TV {...props} type="onTheAirTV" title="On Air Shows" />} />
            <Route
              path="/tv/onAirToday"
              exact
              key="onTheAirTodayTV"
              render={(props) => <TV {...props} type="onTheAirTodayTV" title="Airing Today" />} />
            <Route path="/tv/:title/:id" exact component={TVInfo} />
            <Redirect from="/tv" to="/tv/popular" />
            <Route path="/search" component={Search} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
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
