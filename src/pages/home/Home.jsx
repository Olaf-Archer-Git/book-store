import React from "react";

import HomeGrid from "./HomeGrid";
import HomeProducts from "./HomeProducts";
import NewsCard from "../blog/NewsCard";
import ProductCard from "../../components/productCard/ProductCard";

import "./Home.scss";
import SpecialCard from "../../components/specialCard/SpecialCard";

const Home = () => {
  return (
    <section className="home">
      <HomeGrid />
      <HomeProducts />
      <div className="home-head">News card</div>
      <NewsCard />
      <div className="home-head">New Arrival</div>
      <ProductCard />
      <div className="home-head">Special Offer</div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-4">
            <SpecialCard />
          </div>
          <div className="col-md-4">
            <SpecialCard />
          </div>
          <div className="col-md-4">
            <SpecialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
