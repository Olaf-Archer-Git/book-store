import React from "react";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import "./Header.scss";

const HeaderBottom = () => {
  return (
    <section className="header-bottom">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-3 bottom-menu">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle bottom-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <CgMenuGridO />
                <span>Categories</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="!#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <ul className="bottom-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBottom;
