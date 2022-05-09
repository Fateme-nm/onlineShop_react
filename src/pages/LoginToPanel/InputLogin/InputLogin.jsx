import React from "react";

const InputLogin = ({ children, type, iconClass, formik, name, value }) => {
  return (
    <div className="relative mt-8 w-full">
      <i className={`fa ${iconClass} absolute text-primary text-xl`}></i>
      <input
        type={type}
        name={name}
        placeholder={children}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="pl-8 border-b-2 focus:outline-none focus:border-primary transition-all duration-500 text-lg w-full"
      />
    </div>
  );
};

export default InputLogin;
