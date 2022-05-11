import React from "react";

const Radio = ({ children, status, handleClick }) => {
  return (
    <div className="form-check flex space-x-2 items-center">
      <input
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-pink-100 checked:border-primary checked:border-4 focus:outline-none transition duration-200 mt-1"
        type="radio"
        name="statuses"
        id={status}
        onClick={handleClick}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor={status}
      >
        {children}
      </label>
    </div>
  );
};

export default Radio;
