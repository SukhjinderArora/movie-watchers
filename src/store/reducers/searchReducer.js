import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchResults: {
    page: 0,
    results: [],
    total_pages: 0
  },
  error: ''
};

const updateState = (prevState, newData) => {
  if (prevState.page === newData.page) return prevState;
  const results = prevState.results.map(item => ({ ...item }));
  const newResults = newData.results.filter(result => result.media_type !== 'person')
  return {
    page: newData.page,
    results: [...results, ...newResults],
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

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_MOVIE_TV:
      if(state.searchResults.results.length === 0 && action.data.results.length === 0) {
        return {
          ...state,
          error: 'No search results found'
        };
      }
      return {
        ...state,
        searchResults: updateState(state.searchResults, action.data),
        error: ''
      };
    case actionTypes.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: resetState(),
      }
    default:
      return state;
  }
};

export default searchReducer;