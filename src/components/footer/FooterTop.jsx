import React from "react";
import { Link } from "react-router-dom";

import { SlPaperPlane } from "react-icons/sl";

import "./Footer.scss";

const FooterTop = () => {
  return (
    <div className="section footer-top">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <SlPaperPlane className="top-img" />
            <span className="top-title">SignUp For Newsletter</span>
          </div>
          <div className="col-md-6">
            <div className="middle-form top-form">
              <input
                type="text"
                className="middle-input"
                placeholder="Add Your Email"
              />
              <Link to="/" className="middle-link">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
