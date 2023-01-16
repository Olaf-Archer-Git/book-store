import React, { useState } from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Meta from "../../components/meta/Meta";
import {
  TfiLayoutColumn2,
  TfiLayoutGrid2,
  TfiLayoutGrid3,
} from "react-icons/tfi";
import AsideShop from "./AsideShop.jsx";
import ProductCard from "../../components/productCard/ProductCard";

import "./Shop.scss";

const Shop = () => {
  const [sortLayout, setSortLayout] = useState("col-lg-4");

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
            <div className="col-lg-9">
              <div className="shop-filter">
                <div className="shop-box">
                  <p className="filter-title">Sort By:</p>
                  <select name="" id="" className="form-control form-select">
                    <option value="best-selling">Rating</option>
                    <option value="price-ascending">Price, Low To Hight</option>
                    <option value="price-descending">Price, High To Low</option>
                    <option value="date-ascending">Newest</option>
                    <option value="date-descending">Oldest</option>
                  </select>
                </div>
                <div className="shop-sort">
                  <div className="shop-item">
                    <p className="shop-products">number of products</p>
                    <TfiLayoutColumn2
                      onClick={() => {
                        setSortLayout("size-12");
                      }}
                    />
                    <TfiLayoutGrid2
                      onClick={() => {
                        setSortLayout("size-6");
                      }}
                    />
                    <TfiLayoutGrid3
                      onClick={() => {
                        setSortLayout("size-4");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="shop-list">
                <div className="row">
                  <ProductCard sortLayout={sortLayout} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
