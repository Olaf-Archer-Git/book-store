import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import img1 from "../../assets/grid-bg4.jpg";
import { FaArrowLeft } from "react-icons/fa";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./SingleBlog.scss";
import SingleForm from "./SingleForm";
import Container from "../../components/container/Container";

const SingleBlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <Meta title={"blog item"} />
      <BreadCrumbs title={"blog item"} />
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
                  <p className="single-subtext">
                    Author's Name
                    <span>10.01.2023</span>
                  </p>
                </div>
                <div className="single-social">
                  <span onClick={() => navigate(-1)} className="single-btn">
                    <FaArrowLeft />
                    <span className="single-link">go back</span>
                  </span>
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
                  distinctio rem commodi accusantium corrupti, dignissimos harum
                  ad voluptate aut ullam earum mollitia minus. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Magnam quis hic, quia
                  deserunt modi quisquam tenetur, distinctio rem commodi
                  accusantium corrupti, dignissimos harum ad voluptate aut ullam
                  earum mollitia minus.
                </div>
                <p className="single-subtext">
                  Author's Name
                  <span>10.01.2023</span>
                </p>
              </div>

              <div className="single-social">
                <Link to="/blog" className="single-btn">
                  <FaArrowLeft />
                  <span className="single-link">go back</span>
                </Link>
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
