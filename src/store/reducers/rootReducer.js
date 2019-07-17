import { combineReducers } from 'redux';

import configReducer from './configReducer';
import movieReducer from './movieReducer';
import tvReducer from './tvReducer';
import trendingReducer from './trendingReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  config: configReducer,
  movies: movieReducer,
  tv: tvReducer,
  trending: trendingReducer,
  search: searchReducer
});

export default rootReducer;