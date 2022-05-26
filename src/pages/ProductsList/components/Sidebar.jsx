import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpService from "services/HttpService";
import { persinaDigit } from "utils";

const Sidebar = ({
  activeCategory,
  categoris,
  colors,
  sizes,
  setShowProducts,
  products,
  handleAcitveCategory,
}) => {
  // const handleChange = (catId) => {
  //   catId !== activeCategory && handleAcitveCategory(catId)
  // }
  const handleClickSize = (sizeId) => {
    const filtereList = products.filter((pro) => {
      return !!pro.sizeId.find((size) => {
        return size === sizeId;
      });
    });
    setShowProducts(filtereList);
  };

  const handleClickColor = (colorId) => {
    const catId = activeCategory ? `categoryId=${activeCategory}&` : "";
    httpService
      .get(`products?${catId}&colorId=${colorId}&_sort=id&_order=desc`)
      .then((res) => setShowProducts(res.data));
  };

  return (
    <aside className="hidden lg:block lg:w-1/3 xl:w-1/2">
      <div className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
        <div className="divide-gray-200 divide-y space-y-5 relative">
          <div className="relative">
            <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              دسته بندی
            </h3>
            <div className="space-y-2 flex flex-col items-end">
              <Link
                className="flex items-center flex-row-reverse space-x-2 space-x-reverse"
                to={`/products`}
                state={{ id: null }}
              >
                <input
                  checked={!activeCategory}
                  type="checkbox"
                  id="all"
                  // onChange={() => {handleChange(cat.id)}}
                  className="focus:ring-0 rounded-sm cursor-pointer accent-primary"
                />
                <label
                  htmlFor="all"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  همه دسته ها
                </label>
              </Link>
              {categoris &&
                categoris.map((cat) => {
                  return (
                    <Link
                      className="flex items-center flex-row-reverse space-x-2 space-x-reverse"
                      to={`/products/${cat.name}`}
                      state={{ id: cat.id }}
                    >
                      <input
                        checked={cat.id === activeCategory}
                        type="checkbox"
                        id={cat.id}
                        // onChange={() => {handleChange(cat.id)}}
                        className="focus:ring-0 rounded-sm cursor-pointer accent-primary"
                      />
                      <label
                        htmlFor={cat.id}
                        className="text-gray-600 ml-3 cursor-pointer"
                      >
                        {cat.name}
                      </label>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              قیمت
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="حداقل"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="حداکثر"
              />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              سایز
            </h3>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {sizes &&
                sizes.map((size) => {
                  return (
                    <button
                      className="text-sm border border-gray-200 rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 focus:bg-primary focus:text-white"
                      onClick={() => {
                        handleClickSize(size.id);
                      }}
                    >
                      {persinaDigit(size.name)}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              رنگ
            </h3>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {colors &&
                colors.map((color) => {
                  return (
                    <button
                      onClick={() => handleClickColor(color.id)}
                      className={`text-xs border border-gray-200 rounded-sm h-8 w-8 shadow-sm focus:ring-primary focus:ring-2`}
                      style={{ backgroundColor: `${color.hex}` }}
                    ></button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
