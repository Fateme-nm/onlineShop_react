import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import RemoveModal from "./components/RemoveModal/RemoveModal";
import WithLayoutpages from "hoc/WithLayoutPages";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  getColors,
  getSizes,
} from "store/slices/products";
import AddOrEditModal from "./components/AddOrEditModal/AddOrEditModal";

const Products = () => {
  const dispatch = useDispatch();
  const { modifiedProducts, categories } = useSelector(
    (state) => state.products
  );
  const { id: remove_id } = useSelector((state) => state.removeId);
  const { edit_id } = useSelector((state) => state.editId);
  const [removeModalOn, setRemoveModalOn] = useState(false);
  const [addOrEditModalOn, setAddOrEditModalOn] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getColors());
    dispatch(getSizes());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [modifiedProducts]);

  useEffect(() => {
    setRemoveModalOn(remove_id ? true : false);
  }, [remove_id]);

  useEffect(() => {
    setAddOrEditModalOn(edit_id ? true : false);
  }, [edit_id]);

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container h-20">
        <h2 className="text-2xl text-bold">مدیریت کالا ها</h2>
        <button
          className="bg-primary rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center"
          onClick={() => setAddOrEditModalOn(true)}
        >
          افزودن کالا
        </button>
      </div>
      <Table categories={categories} />
      {removeModalOn && <RemoveModal />}
      {addOrEditModalOn && (
        <AddOrEditModal setAddOrEditModalOn={setAddOrEditModalOn} />
      )}
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
