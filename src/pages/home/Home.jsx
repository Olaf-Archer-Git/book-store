import React from "react";

import HomeGrid from "./HomeGrid";
import HomeProducts from "./HomeProducts";
import NewsCard from "../blog/NewsCard";
import ProductCard from "../../components/productCard/ProductCard";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <HomeGrid />
      <HomeProducts />
      <div className="home-head">News card</div>
      <NewsCard />
      <div className="home-head">New Arrival</div>
      <ProductCard />
    </section>
  );
};

export default Home;
