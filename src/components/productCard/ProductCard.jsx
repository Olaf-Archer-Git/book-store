import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import img from "../../assets/book2.png";
import "./ProductCard.scss";

const ProductCard = ({ sortLayout, productState }) => {
  const ratingChanged = () => {
    console.log("newRating");
  };

  return (
    <>
      {productState.map((item) => {
        return (
          <div key={item._id} className={sortLayout}>
            <div className="cards-container">
              <div className="cards-wrapper">
                <div className="cards-img">
                  <img className="image" src={img} alt="#!" />
                </div>
                <div title="add to favorite" className="cards-like">
                  <BsSuitHeart />
                </div>
              </div>

              <div className="cards-box">
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.author}</div>
                <div
                  className={`cards-description ${
                    sortLayout === "col-lg-8" || sortLayout === "col-lg-6"
                      ? "d-block"
                      : "d-none"
                  }`}
                >
                  {item.description.replace(new RegExp("<[^>]*>", "g"), "")}
                </div>
                <div className="cards-rating">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={parseInt(item.totalRating)}
                    size={21}
                    activeColor="#ffd700"
                  />
                </div>

                <Link className="cards-link" to="/product/:id">
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
