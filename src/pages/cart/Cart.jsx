import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import "./Cart.scss";

const Cart = () => {
  return (
    <>
      <Meta title={"Product Cart"} />
      <BreadCrumbs title={"Product Cart"} />
      <section className="cart">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-container">
                <div className="cart-product">product</div>
                <div className="cart-price">price</div>
                <div className="cart-quantity">quantity</div>
                <div className="cart-total">total</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
