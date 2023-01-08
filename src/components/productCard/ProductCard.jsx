import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsSuitHeart } from "react-icons/bs";
import Button from "../../components/buttons/Button.jsx";
import img1 from "../../assets/templates/template2.png";
// import img2 from "../../assets/templates/template3.png";

import "./ProductCard.scss";

const ProductCard = () => {
  const ratingChanged = () => {
    console.log("newRating");
  };
  return (
    <section className="cards">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="cards-wrapper">
              <div className="cards-item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className=" position-relative">
                      <img className="cards-img" src={img1} alt="#!" />
                      {/* <img className="cards-img hide" src={img2} alt="#!" /> */}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="cards-content">
                      <div className="cards-title">name of the book</div>
                      <div className="cards-icon">
                        <BsSuitHeart />
                      </div>
                      <div className="cards-subtitle">Erich Maria Remark</div>
                      <a className="cards-link" href="#!">
                        read more ...
                      </a>
                      <div className="cards-price">
                        $25.50 &nbsp;&nbsp; <strike>$30.50</strike>
                      </div>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={21}
                        activeColor="#ffd700"
                      />
                      <div className="cards-btn">
                        <Button text={"add to cart"} />
                        <Button text={"buy now"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cards-wrapper">
              <div className="cards-item">
                <div className="row">
                  <div className="col-lg-5">
                    <img className="cards-img" src={img1} alt="#!" />
                  </div>
                  <div className="col-lg-7">
                    <div className="cards-content">
                      <div className="cards-title">name of the book</div>
                      <div className="cards-icon">
                        <BsSuitHeart />
                      </div>
                      <div className="cards-subtitle">Erich Maria Remark</div>
                      <a className="cards-link" href="#!">
                        read more ...
                      </a>
                      <div className="cards-price">$25.50</div>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={21}
                        activeColor="#ffd700"
                      />
                      <div className="cards-btn">
                        <Button text={"add to cart"} />
                        <Button text={"buy now"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
