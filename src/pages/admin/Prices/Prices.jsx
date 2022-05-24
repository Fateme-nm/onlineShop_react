import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Table from "./Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "store/slices/products";

const Prices = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (isSubmiting) {
      dispatch(getProducts());
      setIsSubmiting(false);
    }
  }, [isSubmiting]);

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت موجودی و قیمت ها</h2>
      </div>
      <Table products={products} setIsSubmiting={setIsSubmiting} />
    </div>
  );
};

export default WithLayoutpages(Prices, "admin");
