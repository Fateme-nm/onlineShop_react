import React from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center flex-row-reverse container">
        <h2 className="text-xl text-bold">مدیریت کالا ها</h2>
        <button className="bg-submit rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">افزودن کالا</button>
      </div>
      <Table />
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
