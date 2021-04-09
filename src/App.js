import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './Components/MenuBar';
import ErrorPage from './Components/ErrorPage';
import Introduction from './Components/Introduction';
import NavBar from './Components/NavBar';

function App() {
  const errorMessage = 'Sorry, you seem to have typed or clicked an incorrect link.';

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/News" component={MenuBar} />
        <Route path="/" render={() => <ErrorPage message={errorMessage} />} />
      </Switch>
    </div>
  );
}

export default App;
