import React from "react";
import { dataTemplate } from "../../data/dataTemplate.js";

import img from "../../assets/templateOne.png";

import "./HomeProducts.scss";

const HomeProducts = () => {
  return (
    <section className="products">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
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
          <div className="col-lg-12">
            <div className="template">
              <div className="template-item">
                <img className="template-img" src={img} alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>

              <div className="template-item">
                <img src="" alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>

              

              <div className="template-item">
                <img src="" alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>

              <div className="template-item">
                <img src="" alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>

              <div className="template-item">
                <img src="" alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>

              <div className="template-item">
                <img src="" alt="#!" />
                <div className="template-text">
                  <p className="template-title"></p>
                  <p className="template-subtitle"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
