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
      <section className="main-product">
        <div className="conatiner-xxl">
          <div className="row mx-2">
            <div className="col-lg-6">
              <div className="main-img">
                <div className="main-inner">
                  <Zoom
                    img={img1}
                    zoomScale={1.5}
                    width={450}
                    height={450}
                    transitionTime={0.3}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-box">
                <p className="title">Author's name</p>
                <p className="title">Book's name</p>
                <p>price: <span className="price">100$</span></p>
                <p>categories: <span>detective, adventures</span></p>
                <p>size: <span>xl</span></p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={21}
                  activeColor="#ffd700"
                />

                <Link to="/refund-policy">refound policy</Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainProduct;
