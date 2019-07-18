import * as actionTypes from './actionTypes';
import { getDataAsync } from './dataActions';
import { addDaysToCurrentDate, subtractDaysFromCurrentDate } from '../../utils/utils';

export const getPopularMovies = () => {
  return (dispatch, getState) => {
    const path = '/discover/movie';
    const pageNumber = getState().movies.popularMovies.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      region: 'US',
      sort_by: 'popularity.desc',
      with_genres: '',
      include_adult: false,
    };
    dispatch(getDataAsync(path, actionTypes.GET_POPULAR_MOVIES, queryParameters))
  };
};

export const getTopRatedMovies = () => {
  return (dispatch, getState) => {
    const path = '/discover/movie';
    const pageNumber = getState().movies.topRatedMovies.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      region: 'US',
      sort_by: 'vote_average.desc',
      "vote_count.gte": 300,
      with_genres: '',
      include_adult: false,
    };
    dispatch(getDataAsync(path, actionTypes.GET_TOP_RATED_MOVIES, queryParameters))
  };
};

export const getUpcomingMovies = () => {
  return (dispatch, getState) => {
    const path = '/discover/movie';
    // console.log(getState())
    const pageNumber = getState().movies.upcomingMovies.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      region: 'US',
      sort_by: 'popularity.desc',
      "primary_release_date.gte": addDaysToCurrentDate(2),
      "primary_release_date.lte": addDaysToCurrentDate(45),
      with_release_type: '1|2|3',
      with_genres: '',
      include_adult: false,
    };
    dispatch(getDataAsync(path, actionTypes.GET_UPCOMING_MOVIES, queryParameters));
  };
};

export const getNowPlayingMovies = () => {
  return (dispatch, getState) => {
    const path = '/discover/movie';
    // console.log(getState())
    const pageNumber = getState().movies.nowPlayingMovies.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      region: 'US',
      sort_by: 'popularity.desc',
      "primary_release_date.gte": subtractDaysFromCurrentDate(60),
      "primary_release_date.lte": addDaysToCurrentDate(2),
      with_release_type: '1|2|3',
      with_genres: '',
      include_adult: false,
    };
    dispatch(getDataAsync(path, actionTypes.GET_NOW_PLAYING_MOVIES, queryParameters));
  };
};

export const getMovieDetails = (movieId) => {
  const path = `/movie/${movieId};`
  return dispatch => {
    const queryParameters = {
      append_to_response: 'credits,videos,recommendations'
    };
    dispatch(getDataAsync(path, actionTypes.GET_MOVIE_DETAILS, queryParameters ))
  };
};

export const resetMovieData = () => {
  return {
    type: actionTypes.CLEAR_MOVIE_DATA
  };
};
