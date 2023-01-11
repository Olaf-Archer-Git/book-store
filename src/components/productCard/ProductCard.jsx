import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/book1.png";

import "./productCard.scss";

const ProductCard = ({ sortLayout }) => {
  const location = useLocation();

  const ratingChanged = () => {
    console.log("newRating");
  };
  return (
    <div className="col-lg-6">
      <section className="cards">
        <div
          className={` ${
            location.pathname === "/shop" ? `${sortLayout}` : "cards-middle"
          }`}
        >
          <div className="cards-wrapper">
            <div className="cards-img">
              <img src={img1} alt="#!" />
            </div>
            <div title="add to favorite" className="cards-like">
              <BsSuitHeart />
            </div>
          </div>
          <div className="cards-box">
            <div className="cards-title">One Hundred Years of Solitude</div>
            <div className="cards-subtitle">
              Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr
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
              <Link>add to cart</Link>
            </div>
          </div>
        </div>

        {/* <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-img">
            <img src={img1} alt="#!" />
          </div>
          <div title="add to favorite" className="cards-like">
            <BsSuitHeart />
          </div>
        </div>
        <div className="cards-box">
          <div className="cards-title">One Hundred Years of Solitude</div>

          <div className="cards-subtitle">
            Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr
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
            <Link>add to cart</Link>
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-img">
            <img src={img1} alt="#!" />
          </div>
          <div title="add to favorite" className="cards-like">
            <BsSuitHeart />
          </div>
        </div>
        <div className="cards-box">
          <div className="cards-title">One Hundred Years of Solitude</div>

          <div className="cards-subtitle">
            Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr
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
            <Link>add to cart</Link>
          </div>
        </div>
      </div>  */}
      </section>
    </div>
  );
};

export default ProductCard;
