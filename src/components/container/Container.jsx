import React from "react";

const Container = (props) => {
  return (
    <div className={props.className}>
      <div className="row">{props.children}</div>
    </div>
  );
};

export default Container;
