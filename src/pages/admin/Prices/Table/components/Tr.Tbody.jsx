import React from "react";
import { updateProduct } from "store/slices/products";
import { useDispatch } from "react-redux";
import { persinaDigit, separate } from "utils";
import EasyEdit, { Types } from "react-easy-edit";

const TrTbody = ({ name, price, count, id, submitChanges }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const dispatch = useDispatch();

  const handleSubmit = (key, value) => {
    const formData = new FormData()
    formData.append("id", id)
    formData.append(key, value)
    dispatch(updateProduct(formData))
  }

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <EasyEdit
          type={Types.NUMBER}
          value={persinaDigit(count)}
          name="count"
          onSave={value => handleSubmit("count", value)}
          className="text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 bg-transparent"
        />
      </td>
      <td className={sameClassName}>
        <EasyEdit
          type={Types.NUMBER}
          value={persinaDigit(separate(price))}
          name="price"
          onSave={value => handleSubmit("price", value)}
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
