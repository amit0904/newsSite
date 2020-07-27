import axios from 'axios';
import {FETCH_NEWS_FEED} from '../Constants'

export function GetNewsFeed(){  
   
const feedData = axios({ 
                        method : 'GET',
                        url : 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2a71dd1268d740ed82222f93e713c98f'})


   return (dispatch) => feedData.then((responseData => dispatch( {type : FETCH_NEWS_FEED, payload : responseData.data.articles})))
        
}



