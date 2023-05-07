import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import { getAllBlogs } from "../../features/blog/blogSlice";

import "./Blog.scss";

const Blog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumbs title={"Blog"} />
      <section className="blog">
        <Container className="container-xxl">
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
                    <Link>history</Link>
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
              {blogState &&
                blogState.map((item) => {
                  return (
                    <div key={item._id} className="col-lg-6">
                      <div className="news-box">
                        <div className="news-img">
                          <img
                            className="blog-image"
                            src={item.images[0]?.url}
                            alt="..."
                          />
                        </div>
                        <div>
                          <p className="title">{item.title}</p>
                          <p className="blog-subtitle">
                            {item.description
                              .replace(new RegExp("<[^>]*>", "g"), "")
                              .substr(0, 75)}
                            &nbsp;...
                          </p>
                        </div>
                        <div className="btn-main">
                          <Link to={`/blog/${item._id}`}>Read More...</Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
