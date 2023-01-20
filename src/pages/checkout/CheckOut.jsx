import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <>
      <Meta title={"CheckOut"} />
      <BreadCrumbs title={"CheckOut"} />
      <section className="checkout">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="checkout-forms">checkout forms</div>
            </div>
            <div className="col-lg-6">
              <div className="checkout-order">checkout order</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
