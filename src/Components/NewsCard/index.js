import React from 'react';
import { useSelector } from 'react-redux';
import './NewsCard.css'
import ErrorPage from '../ErrorPage';

function NewsCard() {
    
    var success = true;

    const articleData = useSelector(state => state.newsFeedReducer)

    if(articleData.status !== "ok" && articleData.status !== "" ){

        success = false
    }

    
    if(articleData.articles !== undefined && articleData.articles.length > 0 ){

    
    var articleDataCopy = articleData.articles.map(item => <figure key={item.title} style={{border : "1px solid black", padding: "5px", margin : "1px", backgroundColor : "#F8F8FF"}}>
                                                                    <h6 style={{marginTop : "5px"}}>{item.source.name}</h6>
                                                                    <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.urlToImage} alt="Sorry could not find an source now." border="1px solid black"></img></a>
                                                                    <figcaption> {item.title}</figcaption>
                                                                 </figure>)
    
    }

    return(
        <>
        {success ? <div className="container" >{articleDataCopy}</div> : <ErrorPage message={articleData.message} />}
        </>
    )
}

export default NewsCard 

