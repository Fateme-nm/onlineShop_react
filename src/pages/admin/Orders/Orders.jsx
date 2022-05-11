import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import axios from "axios";
import Radio from "./components/Table/components/Radio";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(null);

  const getOrders = async () => {
    const response = await axios
      .get("http://localhost:3002/orders", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setOrders(response);
  };

  const handleClickStatus = (e) => {
    const status = e.target.id;
    setActiveStatus(status);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت سفارش ها</h2>
        <div className="flex justify-center space-x-5">
          <Radio status="1" handleClick={handleClickStatus}>
            سفارش های تحویل شده
          </Radio>
          <Radio status="3" handleClick={handleClickStatus}>
            سفارش های در انتظار ارسال
          </Radio>
        </div>
      </div>
      <Table orders={orders} activeStatus={activeStatus} />
    </div>
  );
};

export default WithLayoutpages(Orders, "admin");
