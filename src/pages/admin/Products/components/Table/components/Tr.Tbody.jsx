import React from "react";
import { useDispatch } from "react-redux";
import { setId } from "store/slices/removeId";

const TrTbody = ({ imgSrc, name, category, id }) => {
  const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";
  const dispatch = useDispatch()

  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <i
          className="fa fa-trash text-red-400 cursor-pointer text-xl"
          onClick={() => dispatch(setId(id))}
        ></i>
      </td>
      <td className={sameClassName}>
        <i className="fas fa-edit text-blue-400 cursor-pointer text-xl"></i>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{category}</div>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{name}</div>
      </td>
      <td className={`flex justify-end ${sameClassName}`}>
        <div className="flex items-center">
          <img className="w-12 h-12" src={imgSrc} alt="product" />
        </div>
      </td>
    </tr>
  );
};

export default TrTbody;
