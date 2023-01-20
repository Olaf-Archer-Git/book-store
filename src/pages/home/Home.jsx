import React from "react";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import SpecialCard from "../../components/specialCard/SpecialCard";
import Banner from "../../components/banner/Banner";
import MainBanner from "../../components/mainBanner/MainBanner";
import Promotion from "../../components/promotion/Promotion.jsx";
import Container from "../../components/container/Container.jsx";

////***********////
import "./Home.scss";

import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <section className="promotion">
        <Container>
          <h2 className="home-caption">Promotion</h2>
          <div className="row">
            <Promotion />
          </div>
        </Container>
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
            <div className="col-lg-3">
              <NewsCard />
            </div>
            <div className="col-lg-3">
              <NewsCard />
            </div>
            <div className="col-lg-3">
              <NewsCard />
            </div>
            <div className="col-lg-3">
              <NewsCard />
            </div>
          </div>
        </div>
      </section>
      <section className="special">
        <h2 className="home-caption">Special Offer</h2>
        <div className="container-xxl">
          <div className="row">
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
