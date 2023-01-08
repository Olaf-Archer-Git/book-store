import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import img1 from "../../assets/templates/special2.png";
import "./SpecialCard.scss";

const SpecialCard = () => {
  const ratingChanged = () => {
    console.log("newRating");
  };
  return (
    <section className="special">
      <div className="special-wrapper">
        <div className="special-item">
          <div className="special-img">
            <img src={img1} alt="#!" />
          </div>
          <div className="special-content">
            <p className="special-brand">sale</p>
            <h3 className="special-title">name of the book</h3>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={21}
              activeColor="#ffd700"
            />
            <div className="special-price">
              <span>$25.50</span>&nbsp;<strike>$30</strike>
            </div>
            <div className="special-till">
              <p>
                5 <span>Days</span>
              </p>
              <div className="special-count d-flex gap-1">
                <span>2</span>:<span>2</span>:<span>3</span>
              </div>
            </div>
            <div className="special-progress">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="special-link">
              <Link to="/">
                option
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCard;
