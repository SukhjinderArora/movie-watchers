import * as actionTypes from './actionTypes';
import { getMoviesAsync } from './moviesAction';
import { getTVAsync } from './TVActions';

export const getData = (path) => {
  return dispatch => {
    switch (path) {
      case '/movie/popular':
        dispatch(getMoviesAsync(path, actionTypes.GET_POPULAR_MOVIES));
        break;
      case '/movie/top_rated':
        dispatch(getMoviesAsync(path, actionTypes.GET_TOP_RATED_MOVIES));
        break;
      case '/tv/popular':
        dispatch(getTVAsync(path, actionTypes.GET_POPULAR_TV));
        break;
      default:
        console.log('No data');
    }
  };
};