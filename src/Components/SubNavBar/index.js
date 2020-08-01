import React from 'react';
import {useSelector} from 'react-redux';


function SubNavBar(props){
    
    const allSources = useSelector(state => state.newsCategory.category)
    
    const requestedSource = allSources.filter(item => item.category === props.prop )
    
    const requestedSourceCopy = requestedSource.map( item => <a key={item.id}
                                                        id = {item.id}
                                                        href="#" 
                                                        style={{flex : "0 0 10px", border : "1px solid black", padding : "5px"}}
                                                        >
                                                        {item.categorySources}
                                                     </a>)

    return(
        <>
            {requestedSourceCopy}
        </>
        
    )

}

export default SubNavBar