import React from "react";

const Features = ({ product }) => {
  const { name, categoryId, price, sizes, colorId } = product;
  return (
    <>
      <h2 className="md:text-3xl text-2xl font-medium mb-4">{name}</h2>
      <div className="space-x-2 flex flex-row-reverse">
        <span className="text-gray-800">: دسته بندی</span>
        <span className="text-gray-600">{categoryId}</span>
      </div>
      <div className="mt-4 space-x-2 flex flex-row-reverse">
        <span className="text-xl">{price}</span>
        <span className="text-gray-800 pr-2">تومان</span>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">سایز</h3>
        <div className="flex items-center space-x-2">
          <button className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 focus:bg-primary focus:text-white">
            38
          </button>
          <button className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 focus:bg-primary focus:text-white">
            39
          </button>
          <button className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 focus:bg-primary focus:text-white">
            40
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">رنگ</h3>
        <button className="text-xs border border-gray-200 rounded-sm h-6 w-6 shadow-sm bg-red-600">
          {colorId}
        </button>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">تعداد</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
          <button className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer" onClick={() => handleClickQuntity(1)}>
            -
          </button>
          <div className="h-8 w-10 flex items-center justify-center">1</div>
          <button className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer" onClick={() => handleClickQuntity(-1)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
