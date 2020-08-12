import axios from 'axios';
import {FETCH_NEWS_FEED, NEWS_CATEGORY} from '../Constants'

export function GetNewsFeed(props){  
   
const feedData = axios({ 
                        method : 'GET',
                        url : `https://newsapi.org/v2/top-headlines?sources=${props}&apiKey=2a71dd1268d740ed82222f93e713c98`})


   return (dispatch) => feedData.then((response => dispatch( {type : FETCH_NEWS_FEED, payload : response.data}))).
                                 catch((error) => {dispatch({type : FETCH_NEWS_FEED, payload : error.response.data})})
        
}

export function GetCategories(){
   
   const categoryData = axios({
                                 method : 'GET',
                                 url : 'https://newsapi.org/v2/sources?language=en&apiKey=2a71dd1268d740ed82222f93e713c98f'})                           
                                 
   return (dispatch) => categoryData.then(response => dispatch({type : NEWS_CATEGORY, payload : response.data})).
                                     catch((error) => {dispatch({type : NEWS_CATEGORY, payload : error.response.data})})

}

