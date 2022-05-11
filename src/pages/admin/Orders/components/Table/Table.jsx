import React, { useState, useEffect } from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";

const Table = ({ orders }) => {
  const [showOrders, setShowOrders] = useState([]);

  const handleFiltering = (e) => {};

  useEffect(() => {
    setShowOrders(orders);
  }, [orders]);

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead>بررسی سفارش</ThThead>
                <ThThead>زمان ثبت سفارش</ThThead>
                <ThThead>مجموع مبلغ</ThThead>
                <ThThead>نام کاربر</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
