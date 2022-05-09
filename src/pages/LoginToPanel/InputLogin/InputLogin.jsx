import React from "react";

const InputLogin = ({ children, type, iconClass}) => {
  return (
    <div className="relative mt-8">
      <i className={`fa ${iconClass} absolute text-primary text-xl`}></i>
      <input
        type={type}
        placeholder={children}
        className="pl-8 border-b-2 focus:outline-none focus:border-primary transition-all duration-500 capitalize text-lg"
      />
    </div>
  );
};

export default InputLogin;
