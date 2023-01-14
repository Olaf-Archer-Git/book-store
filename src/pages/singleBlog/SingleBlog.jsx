import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/grid-bg4.jpg";

import "./SingleBlog.scss";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"blog item"} />
      <BreadCrumbs title={"blog item"} />
      <section className="single-blog">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3">
              <div className="aside-card">
                <p className="aside-title">Find by categories</p>
                <div>
                  <ul className="aside-list">
                    <li>
                      <Link>detective</Link>
                    </li>
                    <li>
                      <Link>fiction</Link>
                    </li>
                    <li>
                      <Link>hiistory</Link>
                    </li>
                    <li>
                      <Link>novel</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="single-container">
                <div className="title">Dynamic Title Blog</div>
                <div className="single-img">
                  <img src={img1} alt="#!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
