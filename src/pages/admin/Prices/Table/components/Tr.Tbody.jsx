import React, { useState, useEffect } from "react";

const TrTbody = ({ name, price, count }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const [disCount, setDisCount] = useState(true);
  const [disPrice, setDisPrice] = useState(true);
  const [changeCount, setChangeCount] = useState()
  const [changePrice, setChangePrice] = useState()

  const handleClick = (e) => {
    if (e.target.name === "count") setDisCount(false);
    else setDisPrice(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "count") setChangeCount(e.target.value)
    else setChangePrice(e.target.value)
  }

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName} onClick={handleClick}>
        <input
          type="text"
          disabled={disCount}
          value={changeCount || count}
          name="count"
          onChange={handleChange}
          className={`text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 ${
            disCount ? "bg-transparent" : "bg-zinc-200"
          }`}
        />
      </td>
      <td className={sameClassName} onClick={handleClick}>
        <input
          type="text"
          disabled={disPrice}
          value={changePrice || price}
          name="price"
          onChange={handleChange}
          className={`text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 ${
            disPrice ? "bg-transparent" : "bg-zinc-200"
          }`}
        />
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{name}</div>
      </td>
    </tr>
  );
};

export default TrTbody;
