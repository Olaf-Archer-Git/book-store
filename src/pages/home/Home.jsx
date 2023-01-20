import React from "react";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import SpecialCard from "../../components/specialCard/SpecialCard";
import Banner from "../../components/banner/Banner";
import MainBanner from "../../components/mainBanner/MainBanner";
import Promotion from "../../components/promotion/Promotion.jsx";
import Container from "../../components/container/Container.jsx";

////***********////
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <section className="promotion">
        <Container className={"container-xxl"}>
          <h2 className="home-caption">Promotion</h2>
          <Promotion />
        </Container>
      </section>
      <section className="banner">
        <Container className={"container-fluid"}>
          <Banner />
        </Container>
      </section>
      <section className="main-banner">
        <Container className={"container-xxl"}>
          <MainBanner />
        </Container>
      </section>
      <section className="news">
        <h2 className="home-caption">News card</h2>
        <Container className={"container-fluid"}>
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
        </Container>
      </section>
      <section className="special">
        <h2 className="home-caption">Special Offer</h2>
        <Container className={"container-xxl"}>
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </Container>
      </section>
    </main>
  );
};

export default Home;
