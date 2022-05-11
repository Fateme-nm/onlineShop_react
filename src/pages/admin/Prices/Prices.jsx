import React, { useState, useEffect } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Table from "./Table/Table";
import axios from "axios";
import { ExpireTime } from "utils";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const Prices = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await axios
      .get("http://localhost:3002/products")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setProducts(response);
  };

  useEffect(() => {
    if (ExpireTime()) {
      navigate(routes.LOGIN_TO_PANEL.path, { replace: true });
    } else getProducts();
  }, []);

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت موجودی و قیمت ها</h2>
        <button className="bg-primary rounded-md py-3 px-5 text-sm text-white font-bold transform hover:translate-y-1 transition-all duration-500 text-center">
          ذخیره
        </button>
      </div>
      <Table products={products} />
    </div>
  );
};

export default WithLayoutpages(Prices, "admin");
