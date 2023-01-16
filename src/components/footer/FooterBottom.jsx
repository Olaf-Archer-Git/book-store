import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./Footer.scss";

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className="container-xl">
        <div className="row bottom-block">
          <div className="col-md-3">
            <ul className="bottom-items">
              <h3>Contact Us</h3>
              <li>
                Shirlee Ave Ponca City,
                <br /> Oklahoma(OK), 74604
              </li>
              <li>(580) 762-4578 1602 </li>
              <li>demo@email.com</li>
            </ul>
            <div className="bottom-social">
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
          <div className="col-md-3">
            <ul className="bottom-items">
              <h3>Information</h3>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/shopping">Shopping</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="bottom-items">
              <h3>Account</h3>
              <li>Search</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="bottom-items">
              <h3>Quick Links</h3>
              <li>Nover</li>
              <li>History</li>
              <li>Fiction</li>
              <li>Fantasy</li>
              <li>Detective</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
