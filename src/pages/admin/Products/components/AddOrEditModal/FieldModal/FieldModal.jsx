import React from "react";

const FieldModal = ({
  label,
  type,
  formik,
  name,
  id,
  input,
  textarea,
  select,
}) => {
  return (
    <div className="relative mt-8 w-full">
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
          className="w-full border-2 border-gray-300 focus:outline-0 rounded-sm"
        />
      )}

      {textarea && (
        <textarea
          cols="30"
          rows="5"
          type={type}
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border-2 border-gray-300 focus:outline-0 rounded-sm"
        ></textarea>
      )}

      {select && (
        <select
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border-2 border-gray-300 focus:outline-0 rounded-sm"
        >
          <option value={1}>اول</option>
          <option value={2}>دوم</option>
          <option value={3}>سوم</option>
        </select>
      )}

      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-primary">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FieldModal;
