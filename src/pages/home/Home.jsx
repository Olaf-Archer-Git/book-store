import React from "react";

import HomeGrid from "./HomeGrid";
import HomeProducts from "./HomeProducts";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <HomeGrid />
      <HomeProducts />
    </section>
  );
};

export default Home;
