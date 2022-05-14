import React, { useEffect } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories } from "store/slices/products";

const Products = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, []);
  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت کالا ها</h2>
        <button className="bg-primary rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">
          افزودن کالا
        </button>
      </div>
      <Table categories={categories} />
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
