import React from "react";

import HomeGrid from "./HomeGrid";

import NewsCard from "../../components/newsCard/NewsCard.jsx";

import SpecialCard from "../../components/specialCard/SpecialCard";
import Banner from "../../components/banner/Banner";
import HomeProducts from "./HomeProducts";

////***********////
import "./Home.scss";
const Home = () => {
  return (
    <section className="home">
      <HomeGrid />
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <Banner />
          </div>
        </div>
      </section>
      <section className="main-banner">
        <HomeProducts />
      </section>
      <section className="news">
        <div className="container-fluid">
          <h2 className="home-caption">News card</h2>
          <div className="row">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </section>
      <h2 className="home-caption">Special Offer</h2>
      <div className="container-xxl">
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
