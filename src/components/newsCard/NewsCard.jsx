import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/book5.png";

import "./NewsCard.scss";

const NewsCard = () => {
  return (
    <>
      <div className="news-box">
        <div className="news-img">
          <img className="image" src={img1} alt="#!" />
        </div>
        <div>
          <p className="title">blog one</p>
          <p className="subtitle">Molestiae, dolorem vel temporibus?</p>
        </div>
        <div className="btn-main">
          <Link to="/blog/:id">Read More...</Link>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
