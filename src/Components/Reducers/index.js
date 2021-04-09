import { combineReducers } from 'redux';
import newsFeedReducer from './NewsFeedReducer';
import newsCategory from './NewsCategory';

const rootReducer = combineReducers(
  {
    newsFeedReducer, // ES6 short hand for newsFeedReducer: newsFeedReducer
    newsCategory, // ES6 short hand for newsCategory: newsCategory
  },
);

export default rootReducer;
