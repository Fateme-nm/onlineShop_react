import React from "react";

const Searchbox = () => {
  return (
    <div className="w-full max-w-xl relative">
      {/* search icon */}
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fas fa-search"></i>
      </span>
      {/* search input */}
      <input
        type="text"
        className="pl-12 w-full border border-r-0 border-primary py-3 pr-3 rounded-l-md focus:outline-none"
        placeholder="جستجو..."
      ></input>
      <button
        type="submit"
        className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Searchbox;
