import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genres: null,
  popularTV: {
    page: 0,
    results: [],
    total_pages: 0
  },
  topRatedTV: {
    page: 0,
    results: [],
    total_pages: 0
  },
  onTheAirTV: {
    page: 0,
    results: [],
    total_pages: 0
  },
  onTheAirTodayTV: {
    page: 0,
    results: [],
    total_pages: 0
  },
  show: null,
  error: null
};

const updateState = (prevState, newData) => {
  if(prevState.page === newData.page) return prevState;
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
        popularTV: updateState(state.popularTV, action.data),
        error: null
      };
    case actionTypes.GET_TOP_RATED_TV:
      return {
        ...state,
        topRatedTV: updateState(state.topRatedTV, action.data),
        error: null
      };
    case actionTypes.GET_ON_THE_AIR_TV:
      return {
        ...state,
        onTheAirTV: updateState(state.onTheAirTV, action.data),
        error: null
      };
    case actionTypes.GET_ON_THE_AIR_TODAY_TV:
      return {
        ...state,
        onTheAirTodayTV: updateState(state.onTheAirTodayTV, action.data),
        error: null
      };
    case actionTypes.CLEAR_TV_DATA:
      return {
        ...state,
        topRatedTV: resetState(),
        popularTV: resetState(),
        onTheAirTV: resetState(),
        onTheAirTodayTV: resetState(),
        show: null,
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