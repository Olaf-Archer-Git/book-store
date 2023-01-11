import React from "react";
import ReactStars from "react-rating-stars-component";
import img1 from "../../assets/book3.png";

import "./productCard.scss";

const ProductCard = () => {
  const ratingChanged = () => {
    console.log("newRating");
  };
  return (
    <div className="col-lg-4">
      <div className="product-container">
        <div className="product-img">
          <img src={img1} alt="#!" />
        </div>
        <div className="product-box">
          <p className="product-title">Name Of The Book</p>
          <p className="product-subtitle">Author's Name</p>
          <p>$100</p>
        </div>
        
        <div className="d-flex justify-content-center">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={21}
          activeColor="#ffd700"
        /></div>
        <div className="product-btn">buy now</div>
      </div>
    </div>
  );
};

export default ProductCard;
