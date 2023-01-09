import React from "react";

import HomeGrid from "./HomeGrid";
import HomeProducts from "./HomeProducts";
import NewsCard from "../blog/NewsCard";
// import ProductCard from "../../components/productCard/ProductCard";

import "./Home.scss";
import SpecialCard from "../../components/specialCard/SpecialCard";

const Home = () => {
  return (
    <section className="home">
      <div className="container-xxl">
        <HomeGrid />
        <HomeProducts />
        <div className="home-head">News card</div>
        <NewsCard />
        <div className="home-head">Special Offer</div>
        <div className="row">
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
{
  /* <div className="home-head">New Arrival</div> */
}
{
  /* <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
            <ProductCard />
          </div>
        </div>
      </div> */
}
