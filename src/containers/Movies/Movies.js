import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import NowPlayingMovies from './NowPlayingMovies';
import UpcomingMovies from './UpcomingMovies';
import MovieInfo from './MovieInfo';

class Movies extends Component {
  render() {
    return (
      <Switch>
        <Route path="/movies/popular" component={PopularMovies}/>
        <Route path="/movies/topRated" component={TopRatedMovies}/>
        <Route path="/movies/upcoming" component={UpcomingMovies}/>
        <Route path="/movies/nowPlaying" component={NowPlayingMovies}/>
        <Route path="/movies/movie/:title/:id" component={MovieInfo}/>
      </Switch>
    );
  }
}

export default Movies;
