import React from "react";

import { dataTemplate } from "../../data/dataTemplate.js";

import "./HomeProducts.scss";

const HomeProducts = () => {
  return (
    <section className="home-products">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="template">
<<<<<<< Updated upstream
              <div className="template-wrapper">
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
=======
              <div className="template-wrap">
                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>

                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>

                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>

                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>
                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>
                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>
                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>

                <div className="template-item">
                  <img className="template-img" src={img} alt="#!" />
                  <div className="template-text">
                    <p className="template-title">tots</p>
                    <p className="template-subtitle">pots</p>
                  </div>
                </div>
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
