import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ type, className, text, align }) => {
  return (
    <div style={{ paddingTop: " 20px", textAlign: align }}>
      <button type={type} className={className}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
