import React from 'react';
import { useSelector } from 'react-redux';

function NewsCard() {

    const data = useSelector(state => {return state.newsReducer.newsArticles})

    const dataCopy = data.map(item => <div style={{border : "1px solid black", padding: "5px"}}>{item.title}</div>)

    return(
        <div style={{display : "grid", gridTemplateColumns : "repeat(4, 1fr)", gridAutoRows : "2fr", gap : "10px 10px" }}>
            {dataCopy}
        </div>
    )
}

export default NewsCard