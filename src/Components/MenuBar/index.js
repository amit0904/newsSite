import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NewsCard from '../NewsCard';
import {GetNewsFeed} from '../Actions'
import './MenuBar.css';

function MenuBar(){

    const [news, setNews] = useState(false);
    const [expand, setExpand] = useState("");
    const dispatch = useDispatch()

      

    const menuElementArray = useSelector(state => state.newsCategory.categorySources);
    var categoriesMenu = []
   
       
        for (const property in menuElementArray ){
        
            categoriesMenu.push( <ul className="MenuParent">
                                    <li className={property} onClick={(e) => handleClickMenuParent(e)}>
                                        {property.toUpperCase()}
                                        <ul id={property} className="MenuChild collapse" text-align="left">
                                            {menuElementArray[property].map(item => <li><a href="#" key={item} id={item} onClick={(e) => handleClickMenuChild(e)}>{item}</a></li> )}
                                        </ul>
                                    </li>
                                </ul>
                               )
        }    
    
    function handleClickMenuParent(e){
        e.stopPropagation()
        let x = document.getElementById(e.target.className);

        if (e.target.className !== expand ){
            expand !== "" && document.getElementById(expand).classList.toggle("collapse");
            x.classList.toggle("collapse");
            setExpand(e.target.className);
        }
        else{
            x.classList.toggle("collapse");
            setExpand("");
        }
               
    }

    function handleClickMenuChild(e){

        e.stopPropagation()
        dispatch(GetNewsFeed(e.target.id))
        document.getElementById(expand).classList.toggle("collapse")
        setExpand("")
    }
    
    return(
        <React.Fragment>
            <div style={{marginLeft : "10px"}}> 
                {categoriesMenu}
            </div>                     
            {news !== "" && <NewsCard/> }
        </React.Fragment>        
    )
}

export default MenuBar

