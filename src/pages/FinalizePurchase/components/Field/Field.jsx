import React, {useState} from "react";
import {
  DateTimeInput,
  DateTimeInputSimple,
  DateInput,
  DateInputSimple,
} from "react-hichestan-datetimepicker";

const Field = ({
  label,
  type,
  formik,
  name,
  id,
  input,
  textarea,
  datepicker,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (event) => {
    setStartDate(event.target.value);
  };
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      {input && (
        <input
          data-jdp
          type={type}
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border border-gray-300 focus:border-primary focus:outline-0 rounded-sm h-8"
        />
      )}
      {datepicker && (
        <DateTimeInput
          value={startDate}
          name={name}
          id={id}
          onChange={handleChange}
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
