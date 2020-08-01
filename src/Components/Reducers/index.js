import {combineReducers} from 'redux';
import newsFeedReducer from './NewsFeedReducer';
import newsFeedSource from './NewsSourceReducer';
import newsCategory from './NewsCategory';

const rootReducer = combineReducers(
    {
        newsFeedReducer : newsFeedReducer,
        newsFeedSource : newsFeedSource,
        newsCategory : newsCategory
    }
)

export default rootReducer