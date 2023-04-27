import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import img1 from "../../assets/book4.png";

import "./Favorite.scss";

const Favorite = () => {
  return (
    <>
      <Meta title={"Favorite"} />
      <BreadCrumbs title={"Favorite"} />
      <section className="favorite">
        <Container className={"container-xxl"}>
          <div className="col-lg-3">
            <div className="card text-center">
              <img src={img1} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>

                <a href="!#" className="btn btn-primary ">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Favorite;
