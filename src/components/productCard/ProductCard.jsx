import React from "react";

import img1 from "../../assets/templates/template-6.jpg";
import Button from "../buttons/Button";

import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <section className="productcard">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="productcard-wrapper">
              <div className="productcard-item">
                <img className="productcard-img" src={img1} alt="#!" />
                <div className="productcard-content">
                  <p className="productcard-title">some title</p>
                  <p className="productcard-subtitle">
                    Unde ad atque a consequuntur quo error quae nobis fugiat?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde ad atque a consequuntur quo error quae nobis fugiat?
                  </p>
                  <p className="productcard-price">$12.50</p>

                  <div className="productcard-btn">
                    <Button text={"add to cart"} />
                    <Button text={"buy now"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="productcard-wrapper">
              <div className="productcard-item">
                <img className="productcard-img" src={img1} alt="#!" />
                <div className="productcard-content">
                  <p className="productcard-title">some title</p>
                  <p className="productcard-subtitle">product description</p>
                  <p className="productcard-price">$12.50</p>
                  <Button text={"add to cart"} />
                  <div className="productcard-btn">
                    <Button text={"buy now"} />
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
