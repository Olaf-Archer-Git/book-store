import React from "react";

import HomeGrid from "./HomeGrid";
import HomeProducts from "./HomeProducts";
import NewsCard from "../blog/NewsCard";


import "./Home.scss";


const Home = () => {
  return (
    <section className="home">
      <HomeGrid />
      <HomeProducts />
      <NewsCard/>
    </section>
  );
};

export default Home;
