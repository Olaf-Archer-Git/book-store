import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/book6.png";
import img2 from "../../assets/book3.png";
import "./AsideShop.scss";

const AsideShop = () => {
  const sizes = [
    { name: "s", color: 1 },
    { name: "m", color: 2 },
    { name: "l", color: 3 },
    { name: "xl", color: 4 },
    { name: "xxl", color: 5 },
  ];
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

          <p className="aside-subtitle">size of book</p>
          {/* map to checkbox */}
          {sizes.map((item) => {
            return (
              <div key={item.color}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`color-${item.color}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`color-${item.color}`}
                  >
                    {item.name}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* map to checkbox */}
      <div className="aside-card">
        <p className="aside-title">product tag</p>
        <div className="aside-tags">
          <span>detective</span>
          <span>history</span>
          <span>poetry</span>
          <span>novel</span>
          <span>fiction</span>
        </div>
      </div>
      <div className="aside-card">
        <p className="aside-title">random book</p>
        <div className="aside-random">
          <div className="aside-random-img">
            <img src={img1} alt="#!" />
          </div>
          <div className="aside-random-text">
            <p className="aside-random-title">name of the book</p>
            <p className="aside-random-subtitle">description</p>
          </div>
        </div>
        <div className="aside-random">
          <div className="aside-random-img">
            <img src={img2} alt="#!" />
          </div>
          <div className="aside-random-text">
            <p className="aside-random-title">name of the book</p>
            <p className="aside-random-subtitle">description</p>
            <p className="aside-random-price">special<span>$25</span></p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideShop;
