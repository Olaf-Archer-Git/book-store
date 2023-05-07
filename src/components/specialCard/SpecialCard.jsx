import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import "./SpecialCard.scss";

const SpecialCard = ({ state }) => {
  const ratingChanged = () => {
    console.log("newRating");
  };

  return (
    <div className="special-wrapper">
      <div className="special-item">
        <div className="row">
          <div className="col-md-6">
            <div className="special-img">
              <img className="image" src={state?.images[0]?.url} alt="#!" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="special-content mt-2">
              <h3 className="special-title">{state.title}</h3>
              <h3 className="special-title mt-2">{state.author}</h3>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                value={parseInt(state.totalRating)}
                size={21}
                activeColor="#ffd700"
              />
              <div className="special-price">
                <span>${state.price}</span>&nbsp;<strike>$40</strike>
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
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow={parseInt(state.sold + 55)}
                    aria-valuemin={state.sold}
                    aria-valuemax={parseInt(state.sold)}
                  ></div>
                </div>
              </div>
              <div className="special-link">
                <Link to="/">add to cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
