import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import {GetNewsFeed} from './Components/Actions'
import NewsCard from './Components/NewsCard';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect( () => {dispatch(GetNewsFeed())} ,[])

  return (
    <div style={{margin : "40px"}}>
      <NewsCard />
    </div>
  );
}

export default App;
