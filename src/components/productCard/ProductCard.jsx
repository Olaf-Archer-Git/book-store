import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/book7.png";

import "./productCard.scss";

const ProductCard = ({ sortLayout }) => {
  const location = useLocation();

  const ratingChanged = () => {
    console.log("newRating");
  };

  return (
    <div
      className={`${
        location.pathname === "/shop" ? `${sortLayout}` : "col-lg-4"
      }`}
    >
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-img">
            <img className="image" src={img1} alt="#!" />
          </div>
          <div title="add to favorite" className="cards-like">
            <BsSuitHeart />
          </div>
        </div>
        <div className="cards-box">
          <div className="title">the jungle book</div>
          <div className="subtitle">rudyard kipling</div>
          <div
            className={`cards-description ${
              sortLayout === "size-12" ? "d-block" : "d-none"
            }`}
          >
            the book about adventures boy who was named tarzan and another
            animals
          </div>
          <div className="cards-rating">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={21}
              activeColor="#ffd700"
            />
          </div>
          <div className="btn-main">
            <Link to="/shop/:id">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
