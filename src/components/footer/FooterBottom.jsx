import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./Footer.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <Container className={"container-xxl"}>
        <div className="col-lg-3 mb-2">
          <h5>Contact Us</h5>
          <div className="bottom-box">
            <ul className="bottom-address">
              <li>
                Shirlee Ave Ponca City,
                <br /> Oklahoma(OK), 74604
              </li>
              <li>(580) 762-4578 1602 </li>
              <li>demo@email.com</li>
            </ul>
            <div className="bottom-social">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <h5>Information</h5>
          <ul className="bottom-inform">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 mb-2">
          <h5>Account</h5>
          <ul className="bottom-account">
            <li>Search</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-lg-3 mb-2">
          <h5>Links</h5>
          <ul className="bottom-links">
            <li>History</li>
            <li>Fiction</li>
            <li>Fantasy</li>
            <li>Detective</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
