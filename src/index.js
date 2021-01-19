import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Components/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
       <Router>
          <App />
       </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

