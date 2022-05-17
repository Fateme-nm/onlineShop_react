import React from "react";
import { useSelector } from "react-redux";

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
  const { categories } = useSelector((state) => state.products);
  return (
    <div className="relative mt-4 w-full">
      {(input || textarea) && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}
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
          className="w-full border-2 border-gray-300 focus:outline-0 rounded-sm my-2"
        >
          <option>دسته بندی</option>
          {categories.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-primary">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FieldModal;
