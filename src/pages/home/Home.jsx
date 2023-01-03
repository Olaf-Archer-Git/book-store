import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/home-banner1.jpg";

import "./Home.scss";
import HomeGrid from "./HomeGrid";

const Home = () => {
  return (
    <section className="home">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="home-banner">
              <img src={banner} alt="#!" />
              <div className="home-content">
                <h2 className="home-title">Discount</h2>
                <p className="home-subtitle">
                  free delivery books
                  <br />
                  from $100
                </p>
                <Link to="/">Send</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <HomeGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
