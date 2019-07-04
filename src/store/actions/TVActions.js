import * as actionTypes from './actionTypes';
import { base_url, API_KEY } from '../../config';

import axios from 'axios';

const getTV = (actionType, data) => {
  return {
    type: actionType,
    tv: data.results
  };
};

export const getTVAsync = (path, actionType) => {
  return dispatch => {
    axios.get(`${base_url}${path}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        dispatch(getTV(actionType, res.data))
      })
      .catch(err => {
        console.log(err);
      });
  };
};