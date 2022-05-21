import React from "react";

const Button = ({ classes, classIcon, cartBtn, children, handleAddToCart }) => {
  return (
    <button
      className={`border text-white px-8 py-2 font-medium rounded transition text-sm flex items-center ${classes}`}
      onClick={() => {
        cartBtn && handleAddToCart();
      }}
    >
      {classIcon && (
        <span className="mr-2">
          <i className={classIcon}></i>
        </span>
      )}{" "}
      {children}
    </button>
  );
};

export default Button;
