import React from 'react'

function Introduction (){

    return(
        
    <div style={{margin : "10% 10% 20% 30%", color : "white" }}>
        <h2>Hi There,</h2>
        <h3>Hope you are having a good day</h3>
        <p>I have created this news website for demo.</p>
        <p>Though it is a simple website but, there are few features that I would like to highlight.</p>
        <ul>
            <li>The next page gets all its data from an api. Even the menu bar and its drop down list.</li>
            <li>There is an implementation of react router, react-redux & thunk middleware.</li>
            <li>API calls are made using Axios.</li>
            <li>This website is hosted on AZURE.</li>
            <li>Any changes this website are deployed using Azure DevOps (CI/CD pipelines).</li>
            <li>It is responsive.</li>
        </ul>
    </div>

    )

};

export default Introduction;


    