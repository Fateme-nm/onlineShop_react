import React from "react";

const TrTbody = ({ fullName, purchaseTotal, orderDate }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <i className="fa fa-trash text-red-400 cursor-pointer text-lg"></i>
      </td>
      <td className={sameClassName}>
        <i class="fas fa-edit text-blue-400 cursor-pointer text-lg"></i>
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
