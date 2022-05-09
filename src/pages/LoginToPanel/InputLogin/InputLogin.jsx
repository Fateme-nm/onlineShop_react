import React from "react";

const InputLogin = ({ children, type, iconClass, formik, name }) => {
  return (
    <div className="relative mt-8 w-full">
      <i className={`fa ${iconClass} absolute text-primary text-xl`}></i>
      <input
        type={type}
        name={name}
        placeholder={children}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="pl-8 border-b-2 focus:outline-none focus:border-primary transition-all duration-500 text-lg w-full"
      />
      {formik.errors[name] && formik.touched[name] ? (
             <div className="text-primary">{formik.errors[name]}</div>
           ) : null}
    </div>
  );
};

export default InputLogin;
