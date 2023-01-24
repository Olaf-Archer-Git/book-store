import React from "react";
import FooterTop from "./FooterTop";

import { AiOutlineCopyrightCircle } from "react-icons/ai";

import "./Footer.scss";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
      <div className="text-center py-2">
        <AiOutlineCopyrightCircle />
        <span>{new Date().getFullYear()}. Book Store License</span>
      </div>
    </footer>
  );
};

export default Footer;
