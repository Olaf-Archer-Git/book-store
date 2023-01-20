import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import "../shopping/Shopping.scss";


const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumbs title={"Refund Policy"} />
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

export default RefundPolicy;
