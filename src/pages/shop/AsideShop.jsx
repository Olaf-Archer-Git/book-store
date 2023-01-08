import React from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";

const AsideShop = () => {
  return (
    <aside className="aside">
      <div className="aside-card">
        <p className="aside-title">Shop by categories</p>
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
      <div className="aside-card">
        <p className="aside-title">filter by</p>
        <div>
          <p className="aside-subtitle">availability</p>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id=""
              />
              <label className="form-check-label" htmlFor="">
                In Stock (1)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id=""
              />
              <label className="form-check-label" htmlFor="">
                Out Of Stock (0)
              </label>
            </div>
          </div>
          <p className="aside-subtitle">price</p>
          <div className="d-flex gap-3">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="from"
              />
              <label htmlFor="floatingInput">from</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput1"
                placeholder="to"
              />
              <label htmlFor="floatingInput1">to</label>
            </div>
          </div>

          {/* map to checkbox */}
          <p className="aside-subtitle">size</p>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="color-1"
              />
              <label className="form-check-label" htmlFor="color-1">
                S (2)
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* map to checkbox */}
      <div className="aside-card">
        <p className="aside-title">product tag</p>
      </div>
      <div className="aside-card">
        <p className="aside-title">random book</p>
      </div>
    </aside>
  );
};

export default AsideShop;
