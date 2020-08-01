import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import {GetCategories} from './Components/Actions'
import NavBar from './Components/SideBar';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect( () => {dispatch(GetCategories())} ,[])

  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
