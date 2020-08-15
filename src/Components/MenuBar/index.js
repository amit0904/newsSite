import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NewsCard from '../NewsCard';
import ErrorPage from '../ErrorPage';
import {GetNewsFeed, GetCategories} from '../Actions';
import {newsCategorySelector} from '../selectors/newsCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSpinner} from '@fortawesome/free-solid-svg-icons';
import './MenuBar.css';

function MenuBar(){

    var categoriesMenu = [];

    const [news, setNews] = useState(false);
    const [expand, setExpand] = useState("");
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect( () => { dispatch(GetCategories())} ,[])

    const newsCategory = useSelector(newsCategorySelector);

    const menuElementArray = newsCategory.sources;
    
    const status = newsCategory.status;
           
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
        e.stopPropagation()
        dispatch(GetNewsFeed(e.target.id))
        document.getElementById(expand).classList.toggle("collapse")
        setExpand("")
        setNews(news => !news)
    }

    
    return(
        <React.Fragment>            
            {newsCategory.isLoading ? <FontAwesomeIcon icon={faCog} rotation={90} pulse size="2x" color="red" /> : <div style={{marginLeft : "10px"}}>{categoriesMenu}</div>}
            {news && <NewsCard/> }
            
        </React.Fragment>        
    )
}

export default MenuBar

