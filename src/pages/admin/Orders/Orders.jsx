import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await axios
      .get("http://localhost:3002/orders")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setOrders(response);
  };
  
  useEffect(() => {
    getOrders()
  }, []);
  
  return (
    <div>
      <div className="mt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت سفارش ها</h2>
      </div>
      <Table orders={orders} />
    </div>
  );
};

export default WithLayoutpages(Orders, "admin");
