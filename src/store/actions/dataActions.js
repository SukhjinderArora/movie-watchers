import axios from 'axios';

import { API_KEY, base_url } from '../../config';

const setData = (actionType, data) => {
  return {
    type: actionType,
    data: data
  };
};

export const getDataAsync = (path, actionType, queryParameters = {}) => {
  return async dispatch => {
    try {
      const url = `${base_url}${path}?api_key=${API_KEY}`;
      const response = await axios.get(url, {
        params: queryParameters
      });
      console.log(response)
      dispatch(setData(actionType, response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};