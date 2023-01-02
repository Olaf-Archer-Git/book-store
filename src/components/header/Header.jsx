import React from "react";
import HeaderTop from "./HeaderTop.jsx";
import HeaderMiddle from "./HeaderMiddle.jsx";

import "./Header.scss";
import HeaderBottom from "./HeaderBottom.jsx";

const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default Header;
