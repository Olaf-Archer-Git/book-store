import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/book2.png";
import { TfiTrash } from "react-icons/tfi";

import "./Cart.scss";
import Container from "../../components/container/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Product Cart"} />
      <BreadCrumbs title={"Product Cart"} />
      <section className="cart">
        <Container className="container-xxl">
          <div className="col-lg-7">
            <div className="cart-container">
              <div className="cart-img">
                <img src={img1} alt="#!" />
              </div>
              <div className="cart-content">
                <h4 className="cart-title">lord of the rings</h4>
                <h4 className="cart-title">j.r.r. tolkien</h4>
                <TfiTrash className="cart-icon" title="REMOVE" />
                <div className="cart-box">
                  <p>
                    Price:<span>$25</span>
                  </p>
                  <p>
                    quantity:
                    <input
                      type="number"
                      className="block-input"
                      min={1}
                      max={10}
                    />
                  </p>
                  <p>
                    Total:<span>$25</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <aside className="cart-aside">
              <h4>
                Subtotal:<span>$100</span>
              </h4>
              <h4>
                Taxes:<span>$100</span>
              </h4>
              <h4>
                Total:<span>$100</span>
              </h4>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to="/checkout" className="aside-btn">
                Check Out
              </Link>
              <Link to="/shop" className="aside-btn">
                Continue Shopping
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
