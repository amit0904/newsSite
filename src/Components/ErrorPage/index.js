import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'


function ErrorPage(){
    return(
        
        <div style={{textAlign: "center", marginTop: "300px"}}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="1x" color="red" />
            <h3 style={{color : "white", display : "inline-block"}}>Sorry, you seem to have typed or clicked an incorrect link.</h3>
        </div>
    )

}

export default ErrorPage;       