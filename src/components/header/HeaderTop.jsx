import React from "react";

import "./Header.scss";

const HeaderTop = () => {
  return (
    <section className="header-top">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <p className="top-text">Free Delivery Over $100 & Free Returns</p>
          </div>
          <div className="col-md-6">
            <p className="top-text">
              Hotline:
              <a href="tel:(348) 937-1792"> (348) 937-1792</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
