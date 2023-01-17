import React from "react";
import { Link } from "react-router-dom";
import { TfiSearch, TfiHeart, TfiUser } from "react-icons/tfi";
import { RiShoppingCartLine, RiRecycleFill } from "react-icons/ri";
import "./Header.scss";

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <div className="container-xxl">
        <div className="row">
          <div className="col-sm-3">
            <h2 className="middle-logo">Book Store</h2>
          </div>
          <div className="col-lg-4">
            <div className="middle-form">
              <input
                type="text"
                className="middle-input"
                placeholder="Search Book Here"
              />
              <Link to="/" className="middle-link">
                <TfiSearch />
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="middle-icons">
              <div className="middle-item">
                <RiRecycleFill />
                <Link to="/compare">Compare</Link>
              </div>
              <div className="middle-item">
                <TfiHeart />
                <Link to="/favorite">favorite</Link>
              </div>
              <div className="middle-item">
                <TfiUser />
                <Link to="/login">LogIn</Link>
              </div>
              <div className="middle-item">
                <Link to="/cart" title="Product Cart" className="middle-cart">
                  <RiShoppingCartLine />
                </Link>
                <span className="middle-badge">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
