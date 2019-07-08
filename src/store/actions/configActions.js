import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as config from '../../config';

const getConfig = (data) => {
  return {
    type: actionTypes.GET_CONFIG,
    configData: data
  };
};

export const getConfigAsync = () => {
  return dispatch => {
    axios.get(config.base_url + '/configuration?api_key=' + config.API_KEY)
      .then(res => {
        // console.log(res.data);
        dispatch(getConfig(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};