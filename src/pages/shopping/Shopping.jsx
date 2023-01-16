import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "./Shopping.scss";

const Shopping = () => {
  return (
    <>
      <Meta title={"Shopping"} />
      <BreadCrumbs title={"Shopping"} />
      <section className="policy">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <div className="policy-container"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopping;
