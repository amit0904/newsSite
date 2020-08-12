import {NEWS_CATEGORY} from '../Constants'

const initialState = {
      status : "",
      message : "",
      code : "",
      totalResults : "",
      articles : []
}


export default function newsCategory(state = initialState, action){
        switch (action.type) {
            
            case NEWS_CATEGORY :
                let navElementArray = [] 
  
                if(action.payload.status === "ok"){

                
                const allCategories = action.payload.sources.map( (item) => (item.category));
             
                const uniqueCategories =  Array.from(new Set(allCategories));

                
                 for(let i=0;i<uniqueCategories.length;i++){        

                          navElementArray[uniqueCategories[i]] = []        
                        for (let j=0;j<action.payload.sources.length;j++) {
                            if (action.payload.sources[j].category === uniqueCategories[i]){  
                                navElementArray[uniqueCategories[i]].push(action.payload.sources[j].id)
                            }
                        }
                }                                     
            }

                return ({...state, status: action.payload.status, code : action.payload.code , message : action.payload.message, totalResults : action.payload.totalResults, sources : navElementArray })
            default:
                return (state)
        }

}