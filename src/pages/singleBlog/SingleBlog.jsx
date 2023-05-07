import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import moment from "moment";
import { FaArrowLeft } from "react-icons/fa";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import SingleForm from "./SingleForm";
import Container from "../../components/container/Container";
import { getSingleBlog } from "../../features/blog/blogSlice";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getBlogID = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blog?.singleBlog);

  useEffect(() => {
    dispatch(getSingleBlog(getBlogID));
  }, [dispatch, getBlogID]);
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumbs title={blogState?.title} />
      <section className="single-blog">
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
              <div className="title">{blogState?.title}</div>
              <div className="single-img">
                <img src={blogState?.images[0]?.url} alt="#!" />
              </div>
              <div className="single-box">
                <div
                  className="single-text"
                  dangerouslySetInnerHTML={{ __html: blogState?.description }}
                ></div>
                <p className="single-subtext">
                  {blogState?.author}
                  <span>
                    {moment(blogState?.cteatedAt).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
                  </span>
                </p>
              </div>

              <div className="single-social">
                <div onClick={() => navigate(-1)} className="single-btn">
                  <FaArrowLeft />
                  <span className="single-link">go back</span>
                </div>
                <div className="bottom-social single-links">
                  <Link className="bottom-social-item">
                    <AiOutlineYoutube />
                  </Link>
                  <Link className="bottom-social-item">
                    <AiOutlineFacebook />
                  </Link>
                  <Link className="bottom-social-item">
                    <AiOutlineTwitter />
                  </Link>
                  <Link className="bottom-social-item">
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <SingleForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default SingleBlog;
