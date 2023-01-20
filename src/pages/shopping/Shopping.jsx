import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "./Shopping.scss";
import Container from "../../components/container/Container";

const Shopping = () => {
  return (
    <>
      <Meta title={"Shopping"} />
      <BreadCrumbs title={"Shopping"} />
      <section className="policy">
        <Container className="container-xl">
          <div className="col-lg-12">
            <div className="policy-container"></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shopping;
