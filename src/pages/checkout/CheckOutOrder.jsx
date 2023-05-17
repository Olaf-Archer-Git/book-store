import React, { useState, useEffect } from "react";
import img1 from "../../assets/book6.png";

import "./CheckOut.scss";

const CheckOutOrder = ({ state }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalSum = 0;
    for (let index = 0; index < state?.length; index++) {
      totalSum =
        totalSum + Number(state[index]?.quantity) * state[index]?.price;
    }
    setTotalPrice(totalSum);
  }, [state]);

  return (
    <div className="col-lg-5 ps-1">
      <div className="checkout-order">
        {state &&
          state.map((item) => {
            return (
              <div className="checkout-goods" key={item._id}>
                <div className="checkout-img">
                  <span>{item?.quantity}</span>
                  <img
                    src={
                      item?.productID?.images[0]?.url
                        ? item?.productID?.images[0]?.url
                        : img1
                    }
                    alt="#!"
                  />
                </div>
                <div className="checkout-content d-flex justify-content-between">
                  <div style={{ maxWidth: "85%" }}>
                    <p>{item?.productID?.author}</p>
                    <p>{item?.productID?.title}</p>
                  </div>

                  <div>
                    <span>$ {item?.price * item?.quantity}</span>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="my-3">
          <div className="d-flex justify-content-between">
            <h5>Subtotal</h5>
            <span className="fw-bold">${totalPrice}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tax </h5>
            <span className="fw-bold"> (25%) ${totalPrice * 0.25}</span>
          </div>
        </div>

        <div className="checkout-total">
          <h4>Total</h4>
          <span>${totalPrice + totalPrice * 0.25}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrder;
