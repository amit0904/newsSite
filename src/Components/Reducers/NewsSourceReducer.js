import {NEWS_DATA_SOURCE} from '../Constants'

const initialState = {
    sources : []
}

function newsFeedSource(state = initialState, action){

    switch (action.type) {
        
        case NEWS_DATA_SOURCE :
            return (
                {...state,sources : action.payload}
            )
                
        default :
            return state
    }        
}

export default newsFeedSource