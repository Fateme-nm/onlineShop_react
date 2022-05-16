import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Modal from "./components/Modal/Modal";
import WithLayoutpages from "hoc/WithLayoutPages";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories } from "store/slices/products";

const Products = () => {
  const dispatch = useDispatch();
  const { deletedProducts, categories } = useSelector((state) => state.products);
  const [removeModalOn, setRemoveModalOn] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [deletedProducts]);

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت کالا ها</h2>
        <button className="bg-primary rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">
          افزودن کالا
        </button>
      </div>
      <Table categories={categories}/>
      {removeModalOn && <Modal/>}
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
