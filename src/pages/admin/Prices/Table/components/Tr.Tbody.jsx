import React, { useState, useEffect } from "react";
import { updateProduct } from "store/slices/products";
import { useDispatch } from "react-redux";
import { persinaDigit } from "utils";
import EasyEdit, { Types } from "";

const TrTbody = ({ name, price, count, id, submitChanges }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (submitChanges && (changeCount || changePrice)) {
  //     if (changeCount) {
  //       const formData = new FormData();
  //       formData.append("count", changeCount);
  //       formData.append("id", id);
  //       dispatch(updateProduct(formData));
  //       setDisCount(true);
  //     }
  //     if (changePrice) {
  //       const formData = new FormData();
  //       formData.append("price", changePrice);
  //       formData.append("id", id);
  //       dispatch(updateProduct(formData));
  //       setDisPrice(true);
  //     }
  //   }
  // }, [submitChanges]);

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <EasyEdit
          type={Types.TEXT}
          value={count}
          name="count"
          className="text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 bg-transparent"
        />
      </td>
      <td className={sameClassName}>
        <EasyEdit
          type={Types.TEXT}
          value={price}
          name="price"
          className="text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 bg-transparent"
        />
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{name}</div>
      </td>
    </tr>
  );
};

export default TrTbody;
