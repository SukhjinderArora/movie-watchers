import { getDataAsync } from './dataActions';
import * as actionTypes from './actionTypes';
import { addDaysToCurrentDate, getCurrentDate } from '../../utils/utils';

export const getTVGenres = () => {
  return (dispatch) => {
    const path = '/genre/tv/list';
    const queryParameters = {
      language: 'en-US',
    };
    dispatch(getDataAsync(path, actionTypes.GET_TV_GENRES, queryParameters));
  };
};

export const getPopularTV = (genre) => {
  return (dispatch, getState) => {
    const path = '/discover/tv';
    const pageNumber = getState().tv.popularTV.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      timezone: 'America/New_York',
      sort_by: 'popularity.desc',
      with_genres: genre
    };
    dispatch(getDataAsync(path, actionTypes.GET_POPULAR_TV, queryParameters));
  };
};

export const getTopRatedTV = (genre) => {
  return (dispatch, getState) => {
    const path = '/discover/tv';
    const pageNumber = getState().tv.topRatedTV.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      timezone: 'America/New_York',
      sort_by: 'vote_average.desc',
      "vote_count.gte": 50,
      with_genres: genre
    };
    dispatch(getDataAsync(path, actionTypes.GET_TOP_RATED_TV, queryParameters));
  };
};

export const getOnTheAirTV = (genre) => {
  return (dispatch, getState) => {
    const path = '/discover/tv';
    const pageNumber = getState().tv.onTheAirTV.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      timezone: 'America/New_York',
      sort_by: 'popularity.desc',
      "air_date.gte": getCurrentDate(),
      "air_date.lte": addDaysToCurrentDate(7),
      with_genres: genre
    };
    dispatch(getDataAsync(path, actionTypes.GET_ON_THE_AIR_TV, queryParameters));
  };
};

export const getOnTheAirTodayTV = (genre) => {
  return (dispatch, getState) => {
    const path = '/discover/tv';
    const pageNumber = getState().tv.onTheAirTodayTV.page;
    const queryParameters = {
      page: pageNumber + 1,
      language: 'en-US',
      timezone: 'America/New_York',
      sort_by: 'popularity.desc',
      "air_date.gte": getCurrentDate(),
      "air_date.lte": getCurrentDate(),
      with_genres: genre
    };
    dispatch(getDataAsync(path, actionTypes.GET_ON_THE_AIR_TODAY_TV, queryParameters));
  };
};

export const getShowDetails = (tvId) => {
  const path = `/tv/${tvId}`;
  return dispatch => {
    const queryParameters = {
      append_to_response: 'credits,videos,reviews,recommendations'
    };
    dispatch(getDataAsync(path, actionTypes.GET_TV_DETAILS, queryParameters))
  }
}; 

export const resetTVData = () => {
  return {
    type: actionTypes.CLEAR_TV_DATA
  };
};