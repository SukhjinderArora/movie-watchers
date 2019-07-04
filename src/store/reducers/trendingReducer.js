import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trending: null
};

const trendingReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_TRENDING:
      return {
        ...state,
        trending: action.data
      };
    default:
      return state;
  }
};

export default trendingReducer;