import React from "react";

import { dataMainBanner } from "../../data/dataTemplate";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div className="col-lg-12">
      <div className="template">
        <div className="template-container">
          {dataMainBanner.map((item) => {
            return (
              <div className="template-box" key={item.id}>
                <img className="template-img" src={item.img} alt="#!" />
                <div>
                  <p className="title">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
