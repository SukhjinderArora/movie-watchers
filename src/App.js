import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { getMovieGenres } from "./store/actions/moviesAction";
import { getTVGenres } from "./store/actions/tvAction";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import MovieInfo from "./components/Movies/MovieInfo/MovieInfo";
import TV from "./components/TV/TV";
import TVInfo from "./components/TV/TVInfo/TVInfo";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies">
              <Route index element={<Navigate to="popular" />} />
              <Route
                path="popular"
                element={
                  <Movies
                    title="Popular Movies"
                    type="popularMovies"
                    key="popularMovies"
                  />
                }
              />
              <Route
                path="top-rated"
                element={
                  <Movies
                    title="Top Rated Movies"
                    type="topRatedMovies"
                    key="topRatesMovies"
                  />
                }
              />
              <Route
                path="upcoming"
                element={
                  <Movies
                    type="upcomingMovies"
                    title="Upcoming Movies"
                    key="upcomingMovies"
                  />
                }
              />
              <Route
                path="now-playing"
                element={
                  <Movies
                    type="nowPlayingMovies"
                    title="Now Playing"
                    key="nowPlayingMovies"
                  />
                }
              />
              <Route path=":title/:id" element={<MovieInfo />} />
            </Route>
            <Route path="tv">
              <Route index element={<Navigate to="popular" />} />
              <Route
                path="popular"
                element={
                  <TV
                    type="popularTV"
                    title="Popular Shows"
                    key="popularShows"
                  />
                }
              />
              <Route
                path="top-rated"
                element={
                  <TV
                    type="topRatedTV"
                    title="Top Rated Shows"
                    key="topRatedShows"
                  />
                }
              />
              <Route
                path="on-air"
                element={
                  <TV type="onTheAirTV" title="On Air Shows" key="onAirShows" />
                }
              />
              <Route
                path="on-air-today"
                element={
                  <TV
                    type="onTheAirTodayTV"
                    title="Airing Today"
                    key="airingToday"
                  />
                }
              />
              <Route path=":title/:id" element={<TVInfo />} />
            </Route>
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieGenres: () => dispatch(getMovieGenres()),
    getTVGenres: () => dispatch(getTVGenres()),
  };
};
export default connect(null, mapDispatchToProps)(App);
