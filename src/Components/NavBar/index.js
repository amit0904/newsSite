import React from 'react';


function NavBar(){
    
    return(
        <nav style={{height : "50px", backgroundColor : "#4A4E69"}}>
            <a href='/Main'style={{display: "inline-block" ,margin:"10px 30px", color : "white", fontSize : "20px"}}>Main</a>
            <a href='/News_feed' style={{margin:"30px", color : "white", fontSize : "20px"}}>NewsFeed</a>
        </nav>
        
    )

}

export default NavBar