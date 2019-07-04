import { combineReducers } from 'redux';

import configReducer from './configReducer';
import movieReducer from './movieReducer';
import tvReducer from './tvReducer';
import trendingReducer from './trendingReducer';

const rootReducer = combineReducers({
  config: configReducer,
  movies: movieReducer,
  tv: tvReducer,
  trending: trendingReducer
});

export default rootReducer;