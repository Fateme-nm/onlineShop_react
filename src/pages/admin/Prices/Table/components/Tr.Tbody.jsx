import React, { useState } from "react";

const TrTbody = ({ name, price, count }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName} onClick={handleClick}>
        <input
          type="text"
          disabled={disCount}
          value={count}
          name="count"
          className="text-sm leading-5 text-gray-900 cursor-pointer"
        />
      </td>
      <td className={sameClassName} onClick={handleClick}>
        <input
          type="text"
          disabled={disPrice}
          value={price}
          name="price"
          className="text-sm leading-5 text-gray-900 cursor-pointer"
        />
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{name}</div>
      </td>
    </tr>
  );
};

export default TrTbody;
