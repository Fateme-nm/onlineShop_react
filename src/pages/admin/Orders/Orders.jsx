import React, { useEffect } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import Radio from "./components/Table/components/Radio";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "store/slices/orders";

const Orders = () => {
  const dispatch = useDispatch();
  const { activeStatus, activeSort } = useSelector((state) => state.orders);
  const { check_id } = useSelector((state) => state.checkId);
  const [checkModalOn, setCheckModalOn] = useState(false);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    setCheckModalOn(check_id ? true : false)
  }, [check_id])

  return (
    <div>
      <div className="pt-8 flex justify-between items-center flex-row-reverse container">
        <h2 className="text-2xl text-bold">مدیریت سفارش ها</h2>
        <div className="flex justify-center space-x-5">
          <Radio status="1">سفارش های تحویل شده</Radio>
          <Radio status="3">سفارش های در انتظار ارسال</Radio>
        </div>
      </div>
      <Table activeStatus={activeStatus} activeSort={activeSort} />
    </div>
  );
};

export default WithLayoutpages(Orders, "admin");
