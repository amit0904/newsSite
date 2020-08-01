import {NEWS_CATEGORY} from '../Constants'

const initialState = {
      categorySources : []
}


export default function newsCategory(state = initialState, action){
    
        switch (action.type) {
            case NEWS_CATEGORY :

                const allCategories = action.payload.map( (item) => (item.category));
             
                const uniqueCategories =  Array.from(new Set(allCategories));

                let navElementArray = [] 
  
                 for(let i=0;i<uniqueCategories.length;i++){        
                          navElementArray[uniqueCategories[i]] = []        
                        for (let j=0;j<action.payload.length;j++) {
                            if (action.payload[j].category === uniqueCategories[i]){  
                                navElementArray[uniqueCategories[i]].push(action.payload[j].id)
                            }
                        }
                }
                     
                // const categoryArray = action.payload.map( item => ({category : item.category , categorySources : item.id}) )

                return ({...state, categorySources : navElementArray })
            default:
                return (state)
        }

}