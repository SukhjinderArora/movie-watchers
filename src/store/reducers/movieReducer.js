import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genres: null,
  popularMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: -1
  },
  topRatedMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: -1
  },
  upcomingMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: -1
  },
  nowPlayingMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: -1
  },
  movie: null,
  error: null
};

const resetState = () => {
  return {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: -1
  };
}

const updateState = (prevState, newData) => {
  if (prevState.page === newData.page) return prevState;
  const results = prevState.results.map(item => ({ ...item }));
  return {
    page: newData.page,
    results: [...results, ...newData.results],
    total_pages: newData.total_pages,
    total_results: newData.total_results
  };
};

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.data.genres,
        error: null
      };
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: updateState(state.popularMovies, action.data),
        error: null
      };
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: updateState(state.topRatedMovies, action.data),
        error: null
      };
    case actionTypes.GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: updateState(state.upcomingMovies, action.data),
        error: null
      }
    case actionTypes.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: updateState(state.nowPlayingMovies, action.data),
        error: null
      }
    case actionTypes.GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.data,
        error: null
      };
    case actionTypes.CLEAR_MOVIE_DATA:
      return {
        ...state,
        popularMovies: resetState(),
        topRatedMovies: resetState(),
        upcomingMovies: resetState(),
        nowPlayingMovies: resetState(),
        movie: null
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