import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllCategory = () => {
  const { categories } = useSelector((state) => state.products);
  return (
    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
      <span className="mr-3 text-white">دسته بندی محصولات</span>
      <span className="text-white">
        <i className="fas fa-bars"></i>
      </span>
      <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">

        {categories.map((cat) => {
          return (
            <Link
              to={`/products/${cat.name}`}
              state={{id: cat.id}}
              className="px-6 py-3 flex items-center justify-end hover:bg-gray-100 transition"
              key={cat.id}
            >
              <span className="mr-3 text-gray-600 text-sm">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategory;
