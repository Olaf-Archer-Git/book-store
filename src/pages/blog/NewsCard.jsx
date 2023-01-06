import React from "react";

import img1 from "../../assets/templates/template-1.jpg";
import img2 from "../../assets/templates/template-2.jpg";
import img3 from "../../assets/templates/template-3.jpg";
import img4 from "../../assets/templates/template-4.jpg";

import "./BlogStyle.scss";

const NewsCard = () => {
  return (
    <div className="news">

      <h2 className="news-head">latest news</h2>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img1} alt="#!" />
              </div>
              <div className="news-text">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  tempore. Rerum, dignissimos? Recusandae nihil libero optio
                  pariatur blanditiis voluptate explicabo?
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img2} alt="#!" />
              </div>
              <div className="news-text">
                <p className="news-title">blog two</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  tempore. Rerum, dignissimos? Recusandae nihil libero optio
                  pariatur blanditiis voluptate explicabo?
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img3} alt="#!" />
              </div>
              <div className="news-text">
                <p className="news-title">blog three</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  tempore. Rerum, dignissimos? Recusandae nihil libero optio
                  pariatur blanditiis voluptate explicabo?
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img4} alt="#!" />
              </div>
              <div className="news-text">
                <p className="news-title">blog four</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  tempore. Rerum, dignissimos? Recusandae nihil libero optio
                  pariatur blanditiis voluptate explicabo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
