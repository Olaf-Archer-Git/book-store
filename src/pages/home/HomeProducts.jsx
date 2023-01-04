import React from "react";
import { dataTemplate } from "../../data/dataTemplate.js";

import "./HomeProducts.scss";

const HomeProducts = () => {
  return (
    <section className="products">
      <div className="container-xxl">
        <div className="services">
          {dataTemplate.map((item) => {
            return (
              <div className="services-wrap" key={item.id}>
                {item.logo}
                <div className="services-item">
                  <p className="services-title">{item.title}</p>
                  <p className="services-subtitle">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
