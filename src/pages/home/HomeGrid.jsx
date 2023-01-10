import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/home-banner1.jpg";
import { dataHome } from "../../data/dataHome";

import "./HomeGrid.scss";

const HomeGrid = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="home-banner">
          <img src={banner} alt="#!" />
          <div className="home-content">
            <h2 className="title">Discount</h2>
            <p className="subtitle">
              free delivery books
              <br />
              from $100
            </p>
            <Link to="/">Send</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="grid">
          {dataHome.map((item) => {
            return (
              <div
                className="grid-item"
                key={item.id}
                style={{
                  backgroundImage: `linear-gradient( ${item.gradient}), url("${item.img}")`,
                }}
              >
                <h2 className="title">{item.title}</h2>
                <p className="subtitle">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
