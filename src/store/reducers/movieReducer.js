import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genres: null,
  popularMovies: null,
  topRatedMovies: null,
  movie: null,
  error: null
};

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.genreList.genres,
        error: null
      };
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.data,
        error: null
      };
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.data,
        error: null
      };
    case actionTypes.GET_MOVIE_DETAILS:
      console.log(action.data)
      return {
        ...state,
        movie: action.data,
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

export default movieReducer;