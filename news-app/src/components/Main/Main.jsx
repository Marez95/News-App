import "./Main.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../../config';


const Main = ({ articles }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      const fetchedArticles = response.data.articles;
      console.log(fetchedArticles);
      setNews(fetchedArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
      <NewsList news={articles} />
  );
};

const NewsList = ({ news }) => {
  return (
    <div className='main'>
      {news.map((article, index) => (
        <div className="article" key={index}>
          <h2><Link to={`/news/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>{article.title}</Link></h2>
          <Link to={`/news/${index}`}>
            <img src={article.urlToImage} alt="" />
          </Link>
          <p>{article.description}</p>
          <p className="source">Source: {article.source.name}</p>
          <Link to={`/news/${index}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
