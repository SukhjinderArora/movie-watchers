import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genres: null,
  popularTV: null,
  topRatedTV: null,
  show: null,
  error: null
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TV_GENRES:
      return {
        ...state,
        genres: action.genreList.genres,
        error: null
      };
    case actionTypes.GET_POPULAR_TV:
      return {
        ...state,
        popularTV: action.data,
        error: null
      };
    case actionTypes.GET_TOP_RATED_TV:
      return {
        ...state,
        topRatedTV: action.data,
        error: null
      };
    case actionTypes.GET_TV_DETAILS:
      return {
        ...state,
        show: action.data,
        error: null
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default tvReducer;