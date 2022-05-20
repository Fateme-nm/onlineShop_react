import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter/Filter";
import Card from "components/Card/Card";
import httpService from "services/HttpService";

const Productslist = () => {
  const [products, setProducts] = useState([])

  const handleRequestProducts = () => {
      await httpService
        .get('products')
        .then(res => setProducts(res.data.reverse()))
  };

  useEffect(() => {
    handleRequestProducts();
  }, []);
  return (
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
        {/* <Card /> */}
      </div>
      <Filter />
      <Sidebar />
    </div>
  );
};

export default WithLayoutpages(Productslist);
