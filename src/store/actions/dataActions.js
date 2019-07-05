import { base_url, API_KEY } from '../../config';
import * as actionTypes from './actionTypes';

import axios from 'axios';

const getData = (actionType, data) => {
  return {
    type: actionType,
    data: data.results || data
  };
};

const getError = (error) => {
  return {
    type: actionTypes.ERROR,
    error
  };
};

export const getDataAsync = (path, actionType) => {
  return async dispatch => {
    try {
      const response = await axios.get(`${base_url}${path}?api_key=${API_KEY}`);
      dispatch(getData(actionType, response.data));
      console.log(response.data)
    } catch(error) {
      console.log(error.message);
      dispatch(getError(error.message));
    }
  };
};