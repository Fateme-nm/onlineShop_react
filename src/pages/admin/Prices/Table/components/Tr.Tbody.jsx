import React from "react";

const TrTbody = ({imgSrc, name, category}) => {
    const sameClassName = "px-6 py-4 whitespace-no-wrap border-b border-gray-200"
  return (
    <tr className="hover:bg-pink-50">
      <td className={sameClassName}>
        <i className="fa fa-trash text-red-400 cursor-pointer text-lg"></i>
      </td>
      <td className={sameClassName}>
        <i class="fas fa-edit text-blue-400 cursor-pointer text-lg"></i>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{category}</div>
      </td>
      <td className={sameClassName}>
        <div className="text-sm leading-5 text-gray-900">{name}</div>
      </td>
      <td className={`flex justify-end ${sameClassName}`}>
        <div className="flex items-center">
          <img
            className="w-12 h-12"
            src={imgSrc}
            alt="product"
          />
        </div>
      </td>
    </tr>
  );
};

export default TrTbody;
