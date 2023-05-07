import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import NewsCard from "../../components/newsCard/NewsCard";
import SpecialCard from "../../components/specialCard/SpecialCard";
import Banner from "../../components/banner/Banner";
import MainBanner from "../../components/mainBanner/MainBanner";
import Promotion from "../../components/promotion/Promotion.jsx";
import Container from "../../components/container/Container.jsx";
import { getAllProducts } from "../../features/product/productSlice";
////***********////
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
        <h2 className="home-caption">Discount Products</h2>
        {/* <Container className={"container-fluid"}>
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
        </Container> */}
      </section>
      <section className="special">
        <h2 className="home-caption">Special Offer</h2>
        <Container className={"container-xxl"}>
          {productState &&
            productState.map((item) => {
              if (item.tags === "special") {
                return (
                  <div className="col-lg-6" key={item._id}>
                    <SpecialCard state={item} />
                  </div>
                );
              }
            })}
        </Container>
      </section>
    </main>
  );
};

export default Home;
