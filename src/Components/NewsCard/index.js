import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';
import './NewsCard.css'

function NewsCard() {
    
    const articleData = useSelector(state => state.newsFeedReducer)

    
    if(articleData.articles !== undefined && articleData.articles.length > 0 ){

    
    var articleDataCopy = articleData.articles.map(item => <figure key={item.title} style={{border : "1px solid black", padding: "5px", margin : "1px", backgroundColor : "#F8F8FF"}}>
                                                                    <h6 style={{marginTop : "5px"}}>{item.source.name}</h6>
                                                                    <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.urlToImage} alt="Sorry could not find an source now." border="1px solid black"></img></a>
                                                                    <figcaption> {item.title}</figcaption>
                                                                 </figure>)
    
    }

    return(
        <>
        {articleData.success ? <div className="container" >{articleDataCopy}</div> : <ErrorPage message={articleData.message} />}
        {articleData.isLoading && <Spinner />}  
        </>
    )
}

export default NewsCard 

