import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


function NavBar(){
    
    return(
        <nav style={{height : "50px", backgroundColor : "#4A4E69"}}>
            {/* <NavLink to="/" activeClassName="active"><a style={{margin:"5px 30px",fontSize : "20px"}}>Main</a></NavLink>            
            <NavLink to="/News" activeClassName="active" ><a style={{margin:"5px",  fontSize : "20px"}}>News</a></NavLink> */}
            <NavLink to="/" activeClassName="active">Main</NavLink>            
            <NavLink to="/News" activeClassName="active" >News</NavLink>
        </nav>
        
    )

}

export default NavBar