import React from "react";
import { updateProduct } from "store/slices/products";
import { useDispatch } from "react-redux";
import { persinaDigit, separate } from "utils";
import EasyEdit, { Types } from "react-easy-edit";

const TrTbody = ({ name, price, count, id, setIsSubmiting }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const dispatch = useDispatch();

  const handleSubmit = (key, value) => {
    setIsSubmiting(true);
    const formData = new FormData();
    formData.append("id", id);
    formData.append(key, value);
    dispatch(updateProduct(formData));
  };

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <EasyEdit
          type={Types.NUMBER}
          value={persinaDigit(count)}
          name="count"
          onValidate={(value) => {
            return value != null && value >= 0;
          }}
          validationMessage="این ورودی مجاز نیست"
          onSave={(value) => handleSubmit("count", value)}
          className="text-sm leading-5 text-gray-900 cursor-pointer rounded-md p-2 bg-transparent"
        />
      </td>
      <td className={sameClassName}>
        <EasyEdit
          type={Types.NUMBER}
          value={persinaDigit(separate(price))}
          name="price"
          onValidate={(value) => {
            return value != null && value >= 0;
          }}
          validationMessage="این ورودی مجاز نیست"
          onSave={(value) => handleSubmit("price", value)}
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
