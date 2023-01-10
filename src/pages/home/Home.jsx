import React from "react";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import SpecialCard from "../../components/specialCard/SpecialCard";
import Banner from "../../components/banner/Banner";
import MainBanner from "../../pages/mainBanner/MainBanner";

////***********////
import "./Home.scss";

import "./Home.scss";
import Promotion from "../../components/promotion/Promotion.jsx";

const Home = () => {
  return (
    <main className="home">
      <section className="promotion">
        <div className="container-xxl">
          <div className="row">
            <Promotion />
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <Banner />
          </div>
        </div>
      </section>
      <section className="main-banner">
        <div className="container-xxl">
          <div className="row">
            <MainBanner />
          </div>
        </div>
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
    </main>
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
