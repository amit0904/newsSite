import React from 'react';
import { useSelector } from 'react-redux';
import './NewsCard.css'

function NewsCard() {

    const articleData = useSelector(state => {return state.newsFeedReducer.newsArticles})

    const articleDataCopy = articleData.map(item => <figure key={item.title} style={{border : "1px solid black", padding: "5px", margin : "1px", backgroundColor : "#F8F8FF"}}>
                                                        <h6 style={{marginTop : "5px"}}>{item.source.name}</h6>
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.urlToImage} alt="Sorry could not find an source now." border="1px solid black"></img></a>
                                                        <figcaption> {item.title}</figcaption>
                                                    </figure>)
    
    return(
        <div className="container" >
            {articleDataCopy}
        </div>
    )
}

export default NewsCard 

