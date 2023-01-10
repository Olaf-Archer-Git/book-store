import React from "react";
import img1 from "../../assets/mainBanner1.jpg";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div className="col-md-12">
      <div className="main-container">
        <div className="main-box">
          <div className="main-logo">book store</div>
          <div className="main-title">BOOK STORE</div>
          <div className="main-subtitle">blablabla</div>
          <div className="main-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          </div>
        </div>
        <div className="main-img">
          <img src={img1} alt="#!" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
