import React from "react";
import { useDispatch } from "react-redux";
import { setCheckId } from "store/slices/checkId";
import { Link } from "react-router-dom";

const TrTbody = ({ fullName, purchaseTotal, orderDate, id, orderItem }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const dispatch = useDispatch();

  if (orderItem) {
    const {name, price, quantity} = orderItem
    return (
      <tr className="hover:bg-pink-50">
        <td className={sameClassName}>
          <div className="text-xs font-medium leading-5 text-gray-900">{quantity}</div>
        </td>
        <td className={sameClassName}>
          <div className="text-xs font-medium leading-5 text-gray-900">{price}</div>
        </td>
        <td className={sameClassName}>
          <Link 
            to={`/product/${name}`}
            className="text-xs font-medium leading-5 text-gray-900 cursor-pointer hover:text-primary"
          >{name}
          </Link>
        </td>
      </tr>
    );
  }
  return (
    <tr className="hover:bg-pink-50">
      <td className={`${sameClassName} flex justify-end`}>
        <div
          className="bg-opacity-80 text-xs leading-5 text-gray-50 bg-primary rounded-full w-fit px-3 py-1 cursor-pointer font-bold"
          onClick={() => dispatch(setCheckId(id))}
        >
          بررسی سفارش
        </div>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{orderDate}</div>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{purchaseTotal}</div>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{fullName}</div>
      </td>
    </tr>
  );
};

export default TrTbody;
