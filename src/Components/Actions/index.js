import axios from 'axios';
import {FETCH_NEWS_FEED} from '../Constants'
import {NEWS_CATEGORY_IN_PROGRESS, NEWS_CATEGORY_IS_SUCCESS, NEWS_CATEGORY_IS_FAILURE} from '../Constants/index.js';
import {offlineNewsSourceData} from '../Constants';

export function GetNewsFeed(props){  
   
const feedData = axios({ 
                        method : 'GET',
                        url : `https://newsapi.org/v2/top-headlines?sources=${props}&apiKey=2a71dd1268d740ed82222f93e713c98f`})


   return (dispatch) => feedData.then((response => dispatch( {type : FETCH_NEWS_FEED, payload : response.data}))).
                                 catch((error) => {dispatch({type : FETCH_NEWS_FEED, payload : error.response.data})})
        
}

export function GetCategories(){   
                                 
   return async (dispatch) => {

      dispatch({type : NEWS_CATEGORY_IN_PROGRESS});

   
      const categoryData = axios({
                                     method : 'GET',
                                     url : 'https://newsapi.org/v2/sources?language=en&apiKey=2a71dd1268d740ed82222f93e713c98'})
                                     .then(response => dispatch({type : NEWS_CATEGORY_IS_SUCCESS, payload : response.data}))
                                     .catch(error => {error.response.status !== 401 ? dispatch({type : NEWS_CATEGORY_IS_FAILURE, payload : error}) : dispatch({type : NEWS_CATEGORY_IS_SUCCESS , payload : offlineNewsSourceData}) })

   } 

}

// dispatch({type : NEWS_CATEGORY_IS_FAILURE, payload : error.data})