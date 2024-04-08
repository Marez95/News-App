import React from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetails.css";

const ArticleDetails = ({ articles }) => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <div className="loading">Loading...</div>;
  }

  let content;
  if (article.content) {
    content = <p>{article.content}</p>;
  } else {
    content = (
      <div>
        No specific information at this moment, keep following in the coming
        hours
      </div>
    );
  }

  return (
    <div className="content">
      <div className="main-content">
        <h2>{article.title}</h2>
        <div className="flex">
          {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} />
          ) : (
            <p>(No image available for this article at the moment)</p>
          )}
        </div>
        <div className="column">
          <p className="context">{content}</p>
        </div>
      </div>
      <p className="author">Author: {article.author ? article.author : "Not available"}</p>
      <p className="source">Source: {article.source.name}</p>
      <p className="publishedAt">Published at : {article.publishedAt}</p>
    </div>
  );
};

export default ArticleDetails;
