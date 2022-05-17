import React from "react";

const FieldModal = ({ label, type, formik, name, id }) => {
  return (
    <div className="relative mt-8 w-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
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

export default FieldModal;
