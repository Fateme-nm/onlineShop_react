import React, { useState, useEffect } from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";
import miladi_be_shamsi from "utils/jalaliDate";

const Table = ({ orders, activeStatus }) => {
  const [dateFilter, setDateFilter] = useState(null);
  const [showOrders, setShowOrders] = useState([]);

  const getOrderDate = (timestamp) => {
    const date = new Date(timestamp);
    const jalaliDate = miladi_be_shamsi(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
    return jalaliDate;
  };

  const handleFiltering = () => {
    const filterList1 = dateFilter === "new" ? [...orders].reverse() : orders;
    if (activeStatus) {
      const filterList2 = filterList1.filter(
        (order) => order.orderStatus == activeStatus
      );
      setShowOrders(filterList2);
    } else setShowOrders(filterList1);
  };

  useEffect(() => {
    setShowOrders([...orders].reverse());
  }, [orders]);

  useEffect(() => {
    handleFiltering();
  }, [activeStatus, dateFilter]);

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead></ThThead>
                <ThThead
                  handleFiltering={(e) => setDateFilter(e.target.value)}
                  sort={[
                    { name: "جدید ترین", value: "new" },
                    { name: "قدیمی ترین", value: "old" },
                  ]}
                >
                  زمان ثبت سفارش
                </ThThead>
                <ThThead>مجموع مبلغ</ThThead>
                <ThThead>نام کاربر</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {showOrders.map((order) => {
                return (
                  <TrTbody
                    fullName={
                      order.customerDetail.firstName +
                      " " +
                      order.customerDetail.lastName
                    }
                    purchaseTotal={order.purchaseTotal}
                    orderDate={getOrderDate(order.orderDate)}
                    key={order.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
