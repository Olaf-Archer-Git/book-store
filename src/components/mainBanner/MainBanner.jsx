import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/mainBanner2.png";
import img2 from "../../assets/mainBannerLogo.png";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

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
            <span className="green">Bo</span>
            <span className="brown">ok</span>
            <br />
            <span className="blue">S</span>
            <span className="brown">t</span>
            <span className="green">or</span>
            <span className="blue">e</span>
          </div>

          <div className="main-subtitle">find new and used books</div>
          <div className="main-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            sit amet consectetur adipisicing
          </div>
          <div className="main-social">
            <Link className="bottom-social-item">
              <AiOutlineYoutube />
            </Link>
            <Link className="bottom-social-item">
              <AiOutlineFacebook />
            </Link>
            <Link className="bottom-social-item">
              <AiOutlineTwitter />
            </Link>
            <Link className="bottom-social-item">
              <AiOutlineInstagram />
            </Link>
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
