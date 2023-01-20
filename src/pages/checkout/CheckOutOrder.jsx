import React from "react";
import img1 from "../../assets/book6.png";

import "./CheckOut.scss";

const CheckOutOrder = () => {
  return (
    <div className="col-lg-5 ps-1">
      <div className="checkout-order">
        <div className="checkout-goods">
          <div className="checkout-img">
            <span>1</span>
            <img src={img1} alt="#!" />
          </div>
          <div className="checkout-content d-flex justify-content-between">
            <div>
              <p>J.K.Rouling</p>
              <p>Harry Potter</p>
            </div>

            <div>
              <span>$ 100</span>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="d-flex justify-content-between">
            <h5>Subtotal</h5>
            <span className="fw-bold">$75</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tax</h5>
            <span className="fw-bold">$25</span>
          </div>
        </div>

        <div className="checkout-total">
          <h4>Total</h4>
          <span>$100</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrder;
