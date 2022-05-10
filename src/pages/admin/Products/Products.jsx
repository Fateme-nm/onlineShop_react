import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios
      .get("http://localhost:3002/products")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setProducts(response)
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="mt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-xl text-bold">مدیریت کالا ها</h2>
        <button className="bg-submit rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">
          افزودن کالا
        </button>
      </div>
      <Table products={products}/>
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
