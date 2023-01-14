import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/grid-bg4.jpg";
import { FaArrowLeft } from "react-icons/fa";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const navigate = useNavigate();
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
                <div className="single-box">
                  <div className="single-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam quis hic, quia deserunt modi quisquam tenetur,
                    distinctio rem commodi accusantium corrupti, dignissimos
                    harum ad voluptate aut ullam earum mollitia minus. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                    quis hic, quia deserunt modi quisquam tenetur, distinctio
                    rem commodi accusantium corrupti, dignissimos harum ad
                    voluptate aut ullam earum mollitia minus.
                  </div>
                </div>
                <div
                  className="single-btn"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  <FaArrowLeft />
                  <span className="single-link">go back</span>
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
