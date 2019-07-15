import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genres: null,
  popularMovies: {
    page: 0,
    results: [],
    total_pages: 0
  },
  topRatedMovies: {
    page: 0,
    results: [],
    total_pages: 0
  },
  upcomingMovies: {
    page: 0,
    results: [],
    total_pages: 0
  },
  nowPlayingMovies: {
    page: 0,
    results: [],
    total_pages: 0
  },
  movie: null,
  error: null
};

const updateState = (prevState, newData) => {
  if (prevState.page === newData.page) return prevState;
  const results = prevState.results.map(item => ({ ...item }));
  return {
    page: newData.page,
    results: [...results, ...newData.results],
    total_pages: newData.total_pages
  };
};

const resetState = () => {
  return {
    page: 0,
    results: [],
    total_pages: 0
  };
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
    case actionTypes.CLEAR_MOVIE_DATA:
      return {
        popularMovies: resetState(),
        topRatedMovies: resetState(),
        upcomingMovies: resetState(),
        nowPlayingMovies: resetState()
      };
    case actionTypes.GET_MOVIE_DETAILS:
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