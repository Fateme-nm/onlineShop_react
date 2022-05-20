import React from "react";

const Filter = () => {
  return (
    <div className="col-span-3">
      <div className="mb-4 flex items-center">
        <button className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
          Filter
        </button>
        <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
          <option>مرتب سازی پیشفرض</option>
          <option>بیش ترین قیمت</option>
          <option>کم ترین قیمت</option>
        </select>
        <div className="flex gap-2 ml-auto">
          <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
            <i className="fas fa-th"></i>
          </div>
          <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
            <i className="fas fa-list"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
