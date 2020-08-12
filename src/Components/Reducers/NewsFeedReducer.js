import {FETCH_NEWS_FEED} from '../Constants'

const initialState = {
    status : "",
    code : "",
    message : "",
    totalResults : "",
    articles : []
}

function newsFeedReducer (state = initialState, action) {
            switch (action.type) {
          
                case FETCH_NEWS_FEED :
                    
                    return (
                        ({...state, status: action.payload.status, code : action.payload.code , message : action.payload.message, totalResults : action.payload.totalResults, articles : action.payload.articles })
                    )
                default :
                    return (
                        state
                    )
            }
        
        }

export default newsFeedReducer