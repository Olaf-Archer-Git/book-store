import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
  return (
    <section className="button">
      <Link className="button-link">{props.text}</Link>
    </section>
  );
};

export default Button;
