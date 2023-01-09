import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/book1.png";

import "./NewsCard.scss";

const NewsCard = () => {
  return (
    <div className="col-md-3">
      <div className="news-box">
        <div className="news-img">
          <img src={img1} alt="#!" />
        </div>
        <div>
          <p className="title">blog one</p>
          <p className="subtitle">Molestiae, dolorem vel temporibus?</p>
        </div>
        <div className="btn-main">
          <Link to="">Read More...</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
