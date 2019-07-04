import * as actionTypes from './actionTypes';
import { base_url, API_KEY } from '../../config';

import axios from 'axios';

const getMovies = (actionType, data) => {
  return {
    type: actionType,
    movies: data.results
  };
};

export const getMoviesAsync = (path, actionType) => {
  return dispatch => {
    axios.get(`${base_url}${path}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        dispatch(getMovies(actionType, res.data))
      })
      .catch(err => {
        console.log(err);
      });
  };
};