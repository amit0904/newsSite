import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'


function ErrorPage(props){
    return(        
        <div style={{textAlign: "center", marginTop: "300px", position : "absolute", zIndex : "-1"}}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" color="red" />
            <h3 style={{color : "white", display : "inline-block", marginLeft : "10px"}}>{props.message}</h3>
        </div>
    )

}

export default ErrorPage;       