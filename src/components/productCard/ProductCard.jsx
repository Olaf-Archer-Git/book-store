import React from "react";
import { Rating } from "react-simple-star-rating";
import { BsSuitHeart } from "react-icons/bs";
import Button from "../../components/buttons/Button.jsx";
import img1 from "../../assets/templates/template2.png";
// import img2 from "../../assets/templates/template3.png";

import "./ProductCard.scss";

const ProductCard = () => {
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
                      <div className="cards-price">$25.50</div>
                      <Rating />
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
                      <Rating />
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
