import {FETCH_NEWS_FEED} from '../Constants'

const initialState = {
    newsArticles : [ ]
}

function newsReducer (state = initialState, action) {

            switch (action.type) {
                case FETCH_NEWS_FEED :
                    return (
                        {...state,newsArticles: action.payload}
                    )
                default :
                    return (
                        state
                    )
            }
        
        }

export default newsReducer