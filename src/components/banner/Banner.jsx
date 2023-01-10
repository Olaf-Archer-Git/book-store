import React from "react";
import { dataBanner } from "../../data/dataTemplate";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="col-md-12">
      <div className="banner-container">
        {dataBanner.map((item) => {
          return (
            <div className="banner-box" key={item.id}>
              {item.logo}
              <div className="banner-content">
                <p className="banner-title">{item.title}</p>
                <p className="banner-subtitle">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
