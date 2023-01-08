import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  const { title } = props;
  return (
    <section className="breadcrumbs py-3">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center fs-5">
              <Link to="/" className="text-dark">
                Home&nbsp;
              </Link>
              / {title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
