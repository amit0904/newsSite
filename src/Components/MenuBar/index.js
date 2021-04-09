/* eslint-disable-file */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsCard from '../NewsCard';
import ErrorPage from '../ErrorPage';
import Spinner from '../Spinner';
import { GetNewsFeed, GetCategories } from '../Actions';
import {
  newsCategoryIsLoading, newsCategorySuccess, newsCategoryMessage, newsCategoryData,
} from '../selectors/newsCategory';
import './MenuBar.css';

function MenuBar() {
  const categoriesMenu = [];
  const [news, setNews] = useState(false);
  const [expand, setExpand] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect( () => { dispatch(GetCategories())} ,[]);
  const isLoading = useSelector(newsCategoryIsLoading);
  const success = useSelector(newsCategorySuccess);
  const message = useSelector(newsCategoryMessage);
  const newsCategory = useSelector(newsCategoryData);
  const menuElementArray = newsCategory;

  function handleClickMenuParent(e) {
    e.stopPropagation();
    const parentClass = document.getElementById(e.target.className);
    if (e.target.className !== expand) {
      if (expand !== '') {
        document.getElementById(expand).classList.toggle('collapse');
      }
      parentClass.classList.toggle('collapse');
      setExpand(e.target.className);
    } else {
      parentClass.classList.toggle('collapse');
      setExpand('');
    }
  }

  function handleClickMenuChild(e) {
    e.stopPropagation();
    dispatch(GetNewsFeed(e.target.id));
    document.getElementById(expand).classList.toggle('collapse');
    setExpand('');
    setNews(true);
  }

  Object.keys(menuElementArray).forEach((property) => {
    categoriesMenu.push(
      <ul className="MenuParent" key={property}>
        <li className={property} key={property} onClick={(e) => handleClickMenuParent(e)}>
          {property.toUpperCase()}
          <ul id={property} className="MenuChild collapse">
            {menuElementArray[property].map((item) => <li key={item} id={item} onClick={(e) => handleClickMenuChild(e)}>{item}</li>)}
          </ul>
        </li>
      </ul>,
    );
  });

  return (
    <>
      {success ? <div style={{ marginLeft: '10px' }}>{categoriesMenu}</div> : <ErrorPage message={message} /> }
      {isLoading && <Spinner />}
      {news && <NewsCard /> }
    </>
  );
}

export default MenuBar;
