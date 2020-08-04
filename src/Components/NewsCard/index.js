import React from 'react';
import { useSelector } from 'react-redux';
import './NewsCard.css'

function NewsCard() {

    const data = useSelector(state => {return state.newsFeedReducer.newsArticles})

  

    const dataCopy = data.map(item => <figure style={{border : "1px solid black", padding: "5px", margin : "1px", maxWidth : "200px", backgroundColor : "#F8F8FF"}}>
                                            <h6 style={{marginTop : "5px"}}>{item.source.name}</h6>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.urlToImage} alt="Sorry could not find an image now." width="200px" border="1px solid black"></img></a>
                                            <figcaption> {item.title}</figcaption>
                                      </figure>)
    


    return(
        <div className="container" >
            {dataCopy}
        </div>
    )
}

export default NewsCard 

