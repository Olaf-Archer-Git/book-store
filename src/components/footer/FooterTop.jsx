import React from "react";
import { Link } from "react-router-dom";

import { SlPaperPlane } from "react-icons/sl";

import "./Footer.scss";

const FooterTop = () => {
  return (
    <div className="section footer-top">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6">
            
            <p><SlPaperPlane /> SignUp For Newsletter</p>
          </div>
          <div className="col-lg-6">
            <div className="middle-form top-form">
              <input
                type="text"
                className="middle-input"
                placeholder="Email"
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
