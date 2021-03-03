import React, { useEffect, useState } from 'react';
import News from '../News';


const TopHeadLine = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=9317483517b043d38ed61b68149f8c13'
    fetch(url)
    .then(res => res.json())
    .then (data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <h2>Top headlines:{articles.length}</h2>
            {
                articles.map(article => <News article = {articles}></News>)
            }
        </div>
    );
};

export default TopHeadLine;