import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { CgMenuGridO } from "react-icons/cg";
import "./Header.scss";

const HeaderBottom = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getClickOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", getClickOutside);

    return () => {
      document.removeEventListener("click", getClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="header-bottom">
      <Container className={"container-xxl"}>
        <div className="col-md-3 bottom-menu">
          <CgMenuGridO />
          <div className="dropdown" ref={ref}>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Categories
            </button>
            {isOpen && (
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/shop">Categories 1</Link>
                </li>
                <li className="menu-item">
                  <Link to="/blog">Categories 2</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">Categories 3</Link>
                </li>
              </ul>
            )}
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
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
