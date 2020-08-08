import React, {useState} from 'react';
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
            categoriesMenu.push( <ul className="MenuParent" key={property}>
                                    <li className={property} key={property} onClick={(e) => handleClickMenuParent(e)} >
                                        {property.toUpperCase()}
                                        <ul id={property} className="MenuChild collapse">
                                            {menuElementArray[property].map(item =><li key={item} id={item} onClick={(e) => handleClickMenuChild(e)}>{item}</li> )}
                                        </ul>
                                    </li>
                                </ul>
                               )
        }    
    
    function handleClickMenuParent(e){
        e.stopPropagation()
        let parentClass = document.getElementById(e.target.className);

        if (e.target.className !== expand ){
            expand !== "" && document.getElementById(expand).classList.toggle("collapse");
            parentClass.classList.toggle("collapse");
            setExpand(e.target.className);
        }
        else{
            parentClass.classList.toggle("collapse");
            setExpand("");
        }
               
    }


    function handleClickMenuChild(e){
        debugger;
        e.stopPropagation()
        dispatch(GetNewsFeed(e.target.id))
        document.getElementById(expand).classList.toggle("collapse")
        setExpand("")
        setNews(true)
    }
    return(
        <React.Fragment>
            <div style={{marginLeft : "10px"}}>            
                {categoriesMenu}
            </div>                                 
            {news && <NewsCard/> }
        </React.Fragment>        
    )
}

export default MenuBar

