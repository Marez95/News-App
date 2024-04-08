import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import axios from "axios";
import apiKey from "./config";

const App = () => {

  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredArticles = articles.filter(article =>
    article &&
    article.title &&
    article.description &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {

    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Main articles={filteredArticles} />} />
        <Route path="/news/:id" element={<ArticleDetails articles={articles} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;