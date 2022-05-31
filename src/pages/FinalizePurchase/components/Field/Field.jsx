import React from "react";

const Field = ({ label, type, formik, name, id, input, textarea }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      {input && (
        <input
          type={type}
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border border-gray-300 focus:border-primary focus:outline-0 rounded-sm h-8"
        />
      )}
      {textarea && (
        <textarea
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border border-gray-300 focus:border-primary focus:outline-0 rounded-sm h-24"
        ></textarea>
      )}
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-primary">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default Field;
