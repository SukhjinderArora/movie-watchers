import { base_url, API_KEY } from '../../config';
import * as actionTypes from './actionTypes';

import axios from 'axios';

const getData = (actionType, data) => {
  return {
    type: actionType,
    data: data.results || data
  };
};

export const clearData = (actionType) => {
  return {
    type: actionType
  };
};

const getError = (error) => {
  return {
    type: actionTypes.ERROR,
    error
  };
};

export const getDataAsync = (path, actionType, appendToResponse = '') => {
  return async dispatch => {
    try {
      const url = `${base_url}${path}?api_key=${API_KEY}${appendToResponse}`;
      const response = await axios.get(url);
      dispatch(getData(actionType, response.data));
    } catch(error) {
      console.log(error.message);
      dispatch(getError(error.message));
    }
  };
};