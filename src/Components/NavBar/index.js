import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NewsCard from '../NewsCard';
import {GetNewsFeed} from '../Actions'
import SubNavBar from '../SubNavBar';
import './NavBar.css';

function SideBar(){

    const [news, setNews] = useState(false);
    const [expand, setExpand] = useState("");
    const dispatch = useDispatch()

      

    const navElementArray = useSelector(state => state.newsCategory.categorySources);
    var categoriesNav = []
    var varClassName = ""
       
        for (const property in navElementArray ){
        
            categoriesNav.push( <ul className="navParent"  float="left">
                                    <li className={property} onClick={(e) => handleClick(e)}>
                                        {property}
                                        <ul id={property} className="navChild collapse">
                                            {navElementArray[property].map(item => <li><a href="#" key={item} id={item} onClick={(e) => handleClickSubNav(e)}>{item}</a></li> )}
                                        </ul>
                                    </li>
                                </ul>
                               )
        }    
    
    function handleClick(e){
        debugger;   
        e.stopPropagation()
        let x = document.getElementById(e.target.className)
        x.classList.toggle("collapse")
        

    }

    function handleClickSubNav(e){
        debugger;
        e.stopPropagation()
        dispatch(GetNewsFeed(e.target.id))
        setExpand(true)
    }
    
    return( 
        <React.Fragment>
            <nav>
                {categoriesNav}
            </nav>                     
            {news !== "" && <NewsCard/> }
        </React.Fragment>        
    )
}

export default SideBar

