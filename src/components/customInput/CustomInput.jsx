import React from "react";

const CustomInput = ({ type, name, placeholder, className }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
