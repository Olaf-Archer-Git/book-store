import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/book2.png";
import { TfiTrash } from "react-icons/tfi";

import "./Cart.scss";

const Cart = () => {
  return (
    <>
      <Meta title={"Product Cart"} />
      <BreadCrumbs title={"Product Cart"} />
      <section className="cart">
        <div className="container-xxl">
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="cart-container">
                  <h4>Product</h4>
                  <div className="cart-box">
                    <div className="cart-img">
                      <img src={img1} alt="#!" />
                    </div>
                    <div className="cart-content">
                      <p>Name Of The Book</p>
                      <p>Name Of The Author</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="cart-container">
                  <h4>Price</h4>
                  <div className="cart-box">
                    <div className="cart-content">$50</div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="cart-container">
                  <h4>Quantity</h4>
                  <div className="cart-box">
                    <input
                      type="number"
                      className="block-input"
                      min={1}
                      max={10}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="cart-container">
                  <h4>Total</h4>
                  <div className="cart-box">
                    <div className="cart-content">
                      <TfiTrash />
                      <span>$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
