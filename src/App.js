import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './App.css';
import {GetCategories} from './Components/Actions';
import MenuBar from './Components/MenuBar';
import ErrorPage from './Components/ErrorPage';
import Introduction from './Components/Introduction';
import NavBar from './Components/NavBar';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect( () => {dispatch(GetCategories())} ,[])

  return (
    <div>
      <NavBar />
      <Switch>
          <Route exact path = '/Main' component={Introduction}/> 
          <Route extact path = '/News_feed' component={MenuBar}/>
          <Route path = '/' component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
