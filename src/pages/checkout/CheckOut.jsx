import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import CheckOutOrder from "./CheckOutOrder";
import Container from "../../components/container/Container";
import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <>
      <Meta title={"CheckOut"} />
      <BreadCrumbs title={"CheckOut"} />
      <section className="checkout">
        <Container className="container-xxl">
          <div className="col-lg-7 pe-1">
            <div className="checkout-forms">
              <h4>Book Store</h4>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link className="checkout-breadcrumb" to="/cart">
                      CART
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link className="checkout-breadcrumb" to="/shopping">
                      Shopping
                    </Link>
                  </li>
                  <li className="breadcrumb-item">payment</li>
                </ol>
              </nav>

              <div className="checkout-container">
                <h5>Contact Information</h5>
                <div className="checkout-details">demo@email.com</div>

                <div className="checkout-box">
                  <h5>Delivery Address</h5>

                  <div className="checkout-select">
                    <div>
                      <select name="" className="form-control form-select">
                        <option
                          disabled
                          value="new address"
                          placeholder="New Address"
                        >
                          Use A New Address
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <select name="" className="form-control form-select">
                      <option disabled value="country">
                        Country
                      </option>
                    </select>
                  </div>

                  <div className="checkout-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>

                  <div className="checkout-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                    <select name="" className="form-control form-select">
                      <option value="state" disabled>
                        State
                      </option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </div>

                  <div className="checkout-btn">
                    <Link to="/cart" className="checkout-link">
                      <AiOutlineDoubleLeft /> <span>Go Back</span>
                    </Link>
                    <Link to="/cart" className="checkout-button">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CheckOutOrder />
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
