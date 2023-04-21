import React from "react";

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  formikValue,
  formikHandler,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={formikValue}
        onChange={formikHandler}
      />
    </div>
  );
};

export default CustomInput;
