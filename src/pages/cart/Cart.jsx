import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { TfiTrash } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { getOrderCart } from "../../features/order/orderSlice";
import Container from "../../components/container/Container";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const orderCartState = useSelector((state) => state.order.orderCart);

  useEffect(() => {
    dispatch(getOrderCart());
  }, [dispatch]);
  return (
    <>
      <Meta title={"Product Cart"} />
      <BreadCrumbs title={"Product Cart"} />
      <section className="cart">
        <Container className="container-xxl">
          {orderCartState &&
            orderCartState.map((item) => {
              return (
                <div className="col-lg-7" key={item._id}>
                  <div className="cart-container">
                    <div className="cart-img">
                      <img src={item?.productID?.images[0]?.url} alt="#!" />
                    </div>
                    <div className="cart-content">
                      <h4 className="cart-title">{item?.productID?.title}</h4>
                      <h4 className="cart-title">{item?.productID?.author}</h4>
                      <TfiTrash className="cart-icon" title="REMOVE" />
                      <div className="cart-box">
                        <p>
                          Price:<span>{item?.price}</span>
                        </p>
                        <p>
                          quantity:
                          <span>{item?.quantity}</span>
                        </p>
                        <p>
                          Total:<span>{item?.price * item?.quantity}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="col-lg-5 " style={{ position: "absolute", right: 0 }}>
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
