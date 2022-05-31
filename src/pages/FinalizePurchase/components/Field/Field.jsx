import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/red.css";

const Field = ({
  label,
  type,
  formik,
  name,
  id,
  input,
  textarea,
  date,
  setDate,
}) => {
  const handleChange = (e) => {
    setDate(e.toDate());
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
      {date && (
        <DatePicker
          minDate={new Date()}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="top"
          animations={[opacity()]}
          value={date}
          onChange={handleChange}
          className="red"
          containerClassName="h-max w-full"
          style={{ height: "2rem", width: "100%" }}
          mapDays={({ date }) => {
            let props = {};
            props.style = { textAlign: "center" };
            let isWeekend = date.weekDay.index === 6;
            if (isWeekend) props.className = "highlight highlight-red";
            return props;
          }}
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
