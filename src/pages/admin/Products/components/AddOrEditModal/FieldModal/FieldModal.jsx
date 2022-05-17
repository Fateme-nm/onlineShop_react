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
        className="w-full border-2 border-gray-300 focus:outline-0 mb-4 rounded-sm"
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-primary">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FieldModal;
