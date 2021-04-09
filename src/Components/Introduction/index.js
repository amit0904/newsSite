/* eslint-disable */

import React from 'react'

function Introduction (){

    return(
        
    <div style={{margin : "10% 10% 20% 30%", color : "darkseagreen" }}>
        <h2>Hi There,</h2>
        <h3>Hope you are having a good day</h3>
        <p>I have created this news website for demo.</p>
        <p>Though it is a simple website but, there are few features that I would like to highlight.</p>
        <ul>
            <li>The next page gets all its data from an api. Even content of menu bar and its drop down list.</li>
            <li>There is an implementation of react router, react-redux & thunk middleware.</li>
            <li>API calls are made using Axios.</li>
            <li>This is a desktop first website but it is still responsive.</li>
            <li>This website is hosted on AZURE.</li>
            <li>Any changes to this website are deployed using Azure DevOps (CI/CD pipelines).</li>            
            <li>Unfortunately, the API provider does not accept request from any server but localhost.<br/>
                You can check the fully functional website by cloning the code on local.
            </li>
        </ul>
    </div>

    )

};

export default Introduction;


    