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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              ex cum soluta distinctio harum, aperiam adipisci, possimus
              consequatur debitis eaque similique, sapiente nulla. In velit
              repellendus aspernatur. Eum, optio veritatis?
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
