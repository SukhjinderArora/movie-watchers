import * as actionTypes from '../actions/actionTypes';

const initialState = {
  config: null,
};

const configReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_CONFIG:
      return {
        ...state,
        config: action.configData
      };
    default:
      return state;
  }
};

export default configReducer;