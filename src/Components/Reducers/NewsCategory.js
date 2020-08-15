import {NEWS_CATEGORY_IN_PROGRESS, NEWS_CATEGORY_IS_SUCCESS, NEWS_CATEGORY_IS_FAILURE} from '../Constants/index.js';


const initialState = {
      isLoading :false,
      status : "",
      message : "",
      code : "",
      totalResults : "",
      sources : []
}


export default function newsCategory(state = initialState, action){

        switch (action.type) {
            
            case NEWS_CATEGORY_IN_PROGRESS : 

            return ({...state, isLoading : true})

            case NEWS_CATEGORY_IS_SUCCESS:       
                
                const formatedSources = formatData(action.payload)

                return ({...state, isLoading : false, status: action.payload.status, sources : formatedSources })
                                                                                                                   
            
            case NEWS_CATEGORY_IS_FAILURE:                

                return ({...state, isLoading : false, status: action.payload.status, code : action.payload.code , message : action.payload.message})
                
            default:
                return (state)
        }

}


function formatData(payload){

        let navElementArray = [] 

        const allCategories = payload.sources.map( (item) => (item.category));
 
        const uniqueCategories =  Array.from(new Set(allCategories));

    
        for(let i=0;i<uniqueCategories.length;i++){        

            navElementArray[uniqueCategories[i]] = []        
                for (let j=0;j<payload.sources.length;j++) {
                    if (payload.sources[j].category === uniqueCategories[i]){  
                          navElementArray[uniqueCategories[i]].push(payload.sources[j].id)
                     }
                }

        }

        return (navElementArray)
}
