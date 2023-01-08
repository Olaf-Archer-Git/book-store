import React from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Meta from "../../components/meta/Meta";
import AsideShop from "./AsideShop";
import "./Shop.scss";

const Shop = () => {
  return (
    <>
      <Meta title={"Shop"} />
      <BreadCrumbs title={"Shop"} />
      <section className="shop">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3">
              <AsideShop />
            </div>
            <div className="col-lg-9"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
