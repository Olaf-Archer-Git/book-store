import React from "react";
import img1 from "../../assets/mainBanner2.png";
import img2 from "../../assets/mainBannerLogo.png";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div className="col-md-12">
      <div className="main-container">
        <div className="main-box">
          <div className="main-logo">
            <img src={img2} alt="#!" />
          </div>
          <div className="main-title">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span>s</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </div>
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
