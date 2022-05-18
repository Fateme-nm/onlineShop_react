import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import banner from 'assets/images/banner.webp'

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center py-24 relative" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
          <h1 className="xl:text-3xl md:text-2xl text-2xl text-gray-800 font-medium mb-4">
            مجموعه ای از بهترین کفش ها <br class="hidden sm:block" /> برای بانوان
          </h1>
          <p className="text-base text-gray-600 leading-6">
            دنیلی، سبکی برای داستان هر فرد
          </p>
          <div className="mt-12">
            <a
              href="shop.html"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent
               hover:text-primary transition"
            >
              همین حالا خرید کنید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithLayoutpages(Home);
