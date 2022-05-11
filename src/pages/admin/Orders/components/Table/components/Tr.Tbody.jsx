import React from "react";

const TrTbody = ({ fullName, purchaseTotal, orderDate }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  return (
    <tr className="hover:bg-pink-50">
      <td className={`${sameClassName} flex justify-end`}>
        <div className="text-xs leading-5 text-gray-50 bg-neutral-400 rounded-full w-fit px-2 py-1 cursor-pointer font-bold">بررسی سفارش</div>
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
