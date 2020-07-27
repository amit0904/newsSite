import {combineReducers} from 'redux'
import newsReducer from './NewsReducer'

const rootReducer = combineReducers(
    {
        newsReducer : newsReducer
    }
)

export default rootReducer