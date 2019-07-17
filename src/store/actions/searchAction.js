import { getDataAsync } from './dataActions';
import * as actionTypes from './actionTypes';

export const getSearchResults = (query) => {
  return (dispatch, getState) => {
    const path = '/search/multi';
    const pageNumber = getState().search.searchResults.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      region: 'US',
      query,
    };
    dispatch(getDataAsync(path, actionTypes.SEARCH_MOVIE_TV, queryParameters));
  };
};

export const clearSearchResults = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_RESULTS
  };
};