import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Meta from "../../components/meta/Meta";
import {
  TfiLayoutColumn2,
  TfiLayoutGrid2,
  TfiLayoutGrid3,
} from "react-icons/tfi";
import AsideShop from "./AsideShop.jsx";
import ProductCard from "../../components/productCard/ProductCard";
import Container from "../../components/container/Container";
import { getAllProducts } from "../../features/products/productSlice";

import "./Shop.scss";

const Shop = () => {
  const [sortLayout, setSortLayout] = useState("col-lg-4");
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);

  // const getProducts = useCallback(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Meta title={"Shop"} />
      <BreadCrumbs title={"Shop"} />
      <section className="shop">
        <Container className="container-xxl">
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
                      setSortLayout("col-lg-8");
                    }}
                  />
                  <TfiLayoutGrid2
                    onClick={() => {
                      setSortLayout("col-lg-6");
                    }}
                  />
                  <TfiLayoutGrid3
                    onClick={() => {
                      setSortLayout("col-lg-4");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="shop-list">
              <div className="row">
                <ProductCard
                  sortLayout={sortLayout}
                  productState={productState}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
