import React from "react";

import img1 from "../../assets/templates/template-1.jpg";
import img2 from "../../assets/templates/template-2.jpg";
import img3 from "../../assets/templates/template-3.jpg";
import img4 from "../../assets/templates/template-4.jpg";

import "./BlogStyle.scss";

const NewsCard = () => {
  return (
    <div className="news">
      <div className="container-xxl">
        <h2 className="news-head">latest news</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img1} alt="#!" />
              </div>
              <div className="news-content">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  dolorem vel temporibus? Molestiae, nobis? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Ad velit nobis dolorem
                  vel temporibus? Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <a href="#!">read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img4} alt="#!" />
              </div>
              <div className="news-content">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  voluptatem, possimus atque earum ea laborum delectus fuga quae
                  velit nobis dolorem vel temporibus? Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <a href="#!">read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img2} alt="#!" />
              </div>
              <div className="news-content">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  voluptatem, possimus atque earum ea laborum delectus fuga quae
                  velit nobis dolorem vel temporibus? Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <a href="#!">read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img3} alt="#!" />
              </div>
              <div className="news-content">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  voluptatem, possimus atque earum ea laborum delectus fuga quae
                  velit nobis dolorem vel temporibus? Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <a href="#!">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
