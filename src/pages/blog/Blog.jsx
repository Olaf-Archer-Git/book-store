import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import NewsCard from "../../components/newsCard/NewsCard";
import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumbs title={"Blog"} />
      <section className="blog">
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
              <div className="row">
                <div className="col-lg-4"><NewsCard /></div>
                <div className="col-lg-4"><NewsCard /></div>
                <div className="col-lg-4"><NewsCard /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
