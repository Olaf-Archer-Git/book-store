import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
  return (
    <div className="btn-prime">
      <button className={props}>{props}</button>
    </div>
  );
};

export default Button;
