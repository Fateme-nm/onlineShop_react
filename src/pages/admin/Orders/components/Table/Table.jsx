import React, { useState, useEffect } from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";
import { miladi_be_shamsi, separate } from "utils";
import ReactPaginate from "react-paginate";

const Table = ({ orders, activeStatus, activeSort }) => {
  // const [showOrders, setShowOrders] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const ordersPerPage = 4;
  const pagesVisited = pageNumber * ordersPerPage;

  const getOrderDate = (timestamp) => {
    const date = new Date(timestamp);
    const jalaliDate = miladi_be_shamsi(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
    return jalaliDate;
  };

  // const handleFiltering = () => {
  //   const filterList1 = activeSort === "new" ? [...orders].reverse() : orders;
  //   if (activeStatus) {
  //     const filterList2 = filterList1.filter(
  //       (order) => order.orderStatus == activeStatus
  //     );
  //     setShowOrders(filterList2);
  //   } else setShowOrders(filterList1);
  // };

  useEffect(() => {
    setShowOrders([...orders].reverse());
  }, [orders]);

  useEffect(() => {
    handleFiltering();
  }, [activeStatus, activeSort]);

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2 flex flex-col justify-center items-center space-y-8">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead></ThThead>
                <ThThead
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
              {showOrders
                .slice(pagesVisited, pagesVisited + ordersPerPage)
                .map((order) => {
                  return (
                    <TrTbody
                      fullName={
                        order.customerDetail.firstName +
                        " " +
                        order.customerDetail.lastName
                      }
                      purchaseTotal={separate(order.purchaseTotal)}
                      orderDate={getOrderDate(order.orderDate)}
                      key={order.id}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <ReactPaginate
            previousLabel={<i className="	fa fa-chevron-left text-primary"></i>}
            nextLabel={<i className="	fa fa-chevron-right text-primary"></i>}
            pageCount={Math.ceil(showOrders.length / ordersPerPage)}
            onPageChange={({ selected }) => setPageNumber(selected)}
            containerClassName={"flex space-x-5"}
            activeClassName={"text-primary"}
          />
      </div>
    </div>
  );
};

export default Table;
