import React, { useState, useEffect } from 'react';
import NewSingle from './NewSingle';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2867e703d87f47079dfaf59c37041d9f`;

        fetch(url)
           .then(response=> response.json())
           .then((data) => {
                setNews(data.articles || []);
            })
            .catch((error) => console.log("Error",error));
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Latest News</h1>
            <div className="row">
                {news.map((item, index) => (
                    <NewSingle key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default News;
