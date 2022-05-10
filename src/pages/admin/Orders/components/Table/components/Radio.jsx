import React from "react";

const Radio = () => {
  return (
    <div className="form-check">
      <input
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor="flexRadioDefault1"
      >
        Default radio
      </label>
    </div>
  );
};

export default Radio;
