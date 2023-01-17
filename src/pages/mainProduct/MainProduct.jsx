import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import ReactStars from "react-rating-stars-component";
import Zoom from "react-img-zoom";

import img1 from "../../assets/book6.png";

import "./MainProduct.scss";

const MainProduct = () => {
  const ratingChanged = () => {
    console.log("newRating");
  };
  return (
    <div>
      <Meta title={"Product Name"} />
      <BreadCrumbs title={"Product Name"} />
      <section className="product">
        <div className="conatiner-xxl">
          <div className="row mx-2">
            <div className="col-lg-9 mx-auto">
              <div className="product-container">
                <div className="product-img">
                  <Zoom
                    img={img1}
                    zoomScale={1.5}
                    width={300}
                    height={350}
                    transitionTime={0.3}
                  />
                </div>
                <div className="product-box">
                  <h3>Author's name</h3>
                  <h3>Book's name</h3>
                  <p className="price">
                    price: <span>100$</span>
                  </p>
                  <p>
                    categories:
                    <span>&nbsp;detective</span>
                  </p>
                  <p>
                    size: <span>xl</span>
                  </p>
                  <p>
                    availability: <span>in stock</span>
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={21}
                    activeColor="#ffd700"
                  />
                  <div className="button-block"></div>

                  <Link to="/refund-policy">refound policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainProduct;
