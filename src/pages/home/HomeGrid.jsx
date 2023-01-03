import React from "react";
import { dataHome } from "../../data/dataHome";

import "./HomeGrid.scss";

const HomeGrid = () => {
  return (
    <div className="grid">
      {dataHome.map((item) => {
        return (
          <div
            className="grid-item"
            key={item.id}
            style={{
              backgroundImage: `linear-gradient(${item.gradient}), url("${item.img}")`,
            }}
          >
            <h2 className="grid-title">{item.title}</h2>
            <p className="grid-subtitle">{item.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeGrid;
