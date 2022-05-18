import React from "react";
import banner from 'assets/images/banner.webp';
import { Link } from "react-router-dom";
import routes from "routes/routes";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-24 relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container">
        <h1 className="xl:text-3xl md:text-2xl text-2xl text-gray-800 font-medium mb-4">
          مجموعه ای از بهترین کفش ها <br class="hidden sm:block" /> برای بانوان
        </h1>
        <p className="text-base text-gray-600 leading-6">
          دنیلی، سبکی برای داستان هر فرد
        </p>
        <div className="mt-12">
          <Link
            to={routes.PRODUCTS_LIST.path}
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent
               hover:text-primary transition"
          >
            همین حالا خرید کنید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
