import React from "react";

import img1 from "../../assets/templates/template-1.jpg";
import img2 from "../../assets/templates/template-2.jpg";
import img3 from "../../assets/templates/template-3.jpg";
import img4 from "../../assets/templates/template-4.jpg";
import Button from "../../components/buttons/Button";

import "./BlogStyle.scss";

const NewsCard = () => {
  return (
    <div className="news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="news-item">
              <div className="news-img">
                <img src={img1} alt="#!" />
              </div>
              <div className="news-content">
                <p className="news-title">blog one</p>
                <p className="news-subtitle">
                  dolorem vel temporibus? Molestiae,
                </p>
              </div>
              <div className="news-btn">
                <Button text={"read more"} />
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
                  earum ea laborum delectus fuga quae velit nobis dolorem vel
                  temporibus? Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <Button text={"read more"} />
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
                <p className="news-subtitle">Molestiae, nobis?</p>
              </div>
              <div className="news-btn">
                <Button text={"read more"} />
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
                  Lorem ipsum dolor sit, Molestiae, nobis?
                </p>
              </div>
              <div className="news-btn">
                <Button text={"read more"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
