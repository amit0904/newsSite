import axios from 'axios';
import {FETCH_NEWS_FEED, NEWS_CATEGORY} from '../Constants'

export function GetNewsFeed(props){  
   
const feedData = axios({ 
                        method : 'GET',
                        url : `https://newsapi.org/v2/top-headlines?sources=${props}&apiKey=2a71dd1268d740ed82222f93e713c98f`})


   return (dispatch) => feedData.then((responseData => dispatch( {type : FETCH_NEWS_FEED, payload : responseData.data.articles})))
        
}

export function GetCategories(){
   
   const categoryData = axios({
                                 method : 'GET',
                                 url : 'https://newsapi.org/v2/sources?language=en&apiKey=2a71dd1268d740ed82222f93e713c98f'})
                                 
   return (dispatch) => categoryData.then(response => dispatch({type : NEWS_CATEGORY, payload : response.data.sources}))

}

