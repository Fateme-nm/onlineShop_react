import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import axios from "axios";
import { ExpireTime } from "utils";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const getProducts = async () => {
    const response = await axios
      .get("http://localhost:3002/products")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setProducts(response);
  };
  const getCategory = async () => {
    const response = await axios
      .get("http://localhost:3002/category")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setCategory(response);
  };
  useEffect(() => {
    if (ExpireTime()) {
      navigate(routes.LOGIN_TO_PANEL.path, { replace: true });
    } else {
      getProducts();
      getCategory();
    }
  }, []);
  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت کالا ها</h2>
        <button className="bg-primary rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">
          افزودن کالا
        </button>
      </div>
      <Table products={products} category={category} />
    </div>
  );
};

export default WithLayoutpages(Products, "admin");
