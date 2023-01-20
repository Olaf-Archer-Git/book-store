import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { VscChromeClose } from "react-icons/vsc";
import img1 from "../../assets/book6.png";

import "./Favorite.scss";
import Container from "../../components/container/Container";

const Favorite = () => {
  return (
    <>
      <Meta title={"Favorite"} />
      <BreadCrumbs title={"Favorite"} />
      <section className="favorite">
        <Container className={"container-xxl"}>
          <div className="col-lg-3">
            <div className="favorite-container">
              <div className="favorite-img">
                <img className="image" src={img1} alt="#!" />
              </div>
              <VscChromeClose />
              <div className="comparing-box">
                <p className="comparing-title">the great gatsby</p>
                <p className="comparing-subtitle">f. scott fizgerald</p>
                <p className="comparing-text">
                  Price: <span className="comparing-price">$36</span>
                </p>

                <p className="comparing-text">
                  Availability: <span> in stock</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Favorite;
