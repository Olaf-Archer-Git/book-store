import React from "react";

import { dataServices, dataTemplate } from "../../data/dataTemplate.js";

import "./HomeProducts.scss";

const HomeProducts = () => {
  return (
    <section className="products">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="services">
              {dataServices.map((item) => {
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
          <div className="col-lg-12">
            <div className="template">
              <div className="template-wrap">
                {dataTemplate.map((item) => {
                  return (
                    <div className="template-item" key={item.id}>
                      <img className="template-img" src={item.img} alt="#!" />
                      <div className="template-text">
                        <p className="template-title">{item.title}</p>
                        <p className="template-subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
