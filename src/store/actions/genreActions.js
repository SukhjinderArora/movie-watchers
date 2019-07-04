import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as config from '../../config';

const getMovieGenres = (list) => {
  return {
    type: actionTypes.GET_MOVIE_GENRES,
    genreList: list
  };
};

export const getMovieGenresAsync = () => {
  return dispatch => {
    axios.get(config.base_url + '/genre/movie/list?api_key=' + config.API_KEY)
      .then(res => {
        console.log(res.data);
        dispatch(getMovieGenres(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getTVGenres = (list) => {
  return {
    type: actionTypes.GET_TV_GENRES,
    genreList: list
  };
};

export const getTVGenresAsync = () => {
  return dispatch => {
    axios.get(config.base_url + '/genre/tv/list?api_key=' + config.API_KEY)
      .then(res => {
        console.log(res.data);
        dispatch(getTVGenres(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
