import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/book1.png";
import Container from "../../components/container/Container";
import "./Comparing.scss";


const Comparing = () => {
  return (
    <>
      <Meta title={"Comparing"} />
      <BreadCrumbs title={"Comparing"} />

      <section className="comparing">
        <Container className="container-xxl">
          <div className="col-lg-3">
            <div className="comparing-container">
              <div className="comparing-img">
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

                <p className="comparing-text">
                  size: <span>m l xl </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Comparing;
