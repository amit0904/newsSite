import {combineReducers} from 'redux';
import newsFeedReducer from './NewsFeedReducer';
import newsCategory from './NewsCategory';

const rootReducer = combineReducers(
    {
        newsFeedReducer : newsFeedReducer,
        newsCategory : newsCategory
    }
)

export default rootReducer