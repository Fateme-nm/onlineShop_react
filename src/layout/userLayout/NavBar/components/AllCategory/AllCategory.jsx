import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "store/slices/products";
import { useDispatch } from "react-redux";

const AllCategory = () => {
  return (
    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
      <span className="mr-3 text-white">دسته بندی محصولات</span>
      <span className="text-white">
        <i className="fas fa-bars"></i>
      </span>
      <div class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
        <Link to={'/products'} class="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition">
            <span class="ml-6 text-gray-600 text-sm">کفش ورزشی</span>
            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain" />
        </Link>
        <Link to={'/products'} class="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition">
            <span class="ml-6 text-gray-600 text-sm">بوت</span>
            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain" />
        </Link>
        <Link to={'/products'} class="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition">
            <span class="ml-6 text-gray-600 text-sm">کفش تخت</span>
            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain" />
        </Link>
        <Link to={'/products'} class="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition">
            <span class="ml-6 text-gray-600 text-sm">کفش پاشنه دار</span>
            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain" />
        </Link>
        <Link to={'/products'} class="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition">
            <span class="ml-6 text-gray-600 text-sm">صندل</span>
            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain" />
        </Link>
      </div>
    </div>
  );
};

export default AllCategory;
