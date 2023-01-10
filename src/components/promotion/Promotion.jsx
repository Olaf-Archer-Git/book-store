import React from "react";
import { Link } from "react-router-dom";
import { dataPromotion } from "../../data/dataPromotion";

import "./Promotion.scss";

const Promotion = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-md-6">
          <div className="promotion-container">
            <h1 className="promotion-title">Discover Our World</h1>
            <p className="promotion-subtitle">
              free delivery books
              <br />
              from <span>$100</span>
            </p>
            <div className="promotion-btn">
              <Link to="#!">Send</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {dataPromotion.map((item) => {
              return (
                <div className="col-lg-6">
                  <div
                    className="promotion-box"
                    key={item.id}
                    style={{
                      backgroundImage: `linear-gradient( ${item.gradient}), url("${item.img}")`,
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
