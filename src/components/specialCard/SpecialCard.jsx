import React from "react";

import img1 from "../../assets/templates/special2.png";
import "./SpecialCard.scss";

const SpecialCard = () => {
  return (
    <section className="special">
      <div className="special-wrapper">
        <div className="special-item">
          <div className="special-img">
            <img src={img1} alt="#!" />
          </div>
          <div className="special-content"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCard;
