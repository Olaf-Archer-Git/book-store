import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "../shopping/Shopping.scss";
import Container from "../../components/container/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumbs title={"Privacy Policy"} />
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

export default PrivacyPolicy;
