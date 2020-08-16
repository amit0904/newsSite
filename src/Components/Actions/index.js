import axios from 'axios';
import {FETCH_NEWS_FEED_IN_PROGRESS,FETCH_NEWS_FEED_IS_SUCCESS,FETCH_NEWS_FEED_IS_FAILURE} from '../Constants'
import {NEWS_CATEGORY_IN_PROGRESS, NEWS_CATEGORY_IS_SUCCESS, NEWS_CATEGORY_IS_FAILURE} from '../Constants/index.js';
import {offlineNewsSourceData, offlineBBCNewsData} from '../Constants';

export function GetNewsFeed(props){  
   
const feedData = axios({ 
                        method : 'GET',
                        headers : {Authorization : 'Bearer 2a71dd1268d740ed82222f93e713c98f'},
                        url : `https://newsapi.org/v2/top-headlines?sources=${props}`})


   return (dispatch) => feedData.then((response => dispatch( {type : FETCH_NEWS_FEED_IS_SUCCESS, payload : response.data})))
                                .catch(error => {error.response !== undefined && error.response.status !== 426 ? dispatch({type : FETCH_NEWS_FEED_IS_FAILURE, payload : error}) : dispatch({type : FETCH_NEWS_FEED_IS_SUCCESS , payload : offlineBBCNewsData}) })
                                 
        
}

export function GetCategories(){   
                                 
   return async (dispatch) => {

      dispatch({type : NEWS_CATEGORY_IN_PROGRESS});

   
      const categoryData = axios({
                                     method : 'GET',
                                     headers : {Authorization : 'Bearer 2a71dd1268d740ed82222f93e713c98f'},
                                     url : 'https://newsapi.org/v2/sources?language=en'})
                                     .then(response => dispatch({type : NEWS_CATEGORY_IS_SUCCESS, payload : response.data}))
                                     .catch(error => {error.response !== undefined && error.response.status !== 426 ? dispatch({type : NEWS_CATEGORY_IS_FAILURE, payload : error}) : dispatch({type : NEWS_CATEGORY_IS_SUCCESS , payload : offlineNewsSourceData}) })

   } 

}

// dispatch({type : NEWS_CATEGORY_IS_FAILURE, payload : error.data})