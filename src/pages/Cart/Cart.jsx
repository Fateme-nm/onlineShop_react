import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";

const Cart = () => {
  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10 flex-row-reverse">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8 flex-row-reverse">
            <h2 class="font-semibold text-2xl">سبد خرید شما</h2>
            <div className="flex items-center flex-row-reverse space-x-2 space-x-reverse cursor-pointer">
                <h3>حذف همه</h3>
                <i className="fa fa-trash text-primary"></i>
            </div>
          </div>
          <table>
              <thead class="flex mt-10 mb-5 flex-row-reverse">
                <tr>
                    <th class="font-semibold text-gray-600 text-xs w-2/5">
                        جزئیات محصول
                    </th>
                    <th class="font-semibold text-gray-600 text-xs w-2/5">
                        تعداد
                    </th>
                    <th class="font-semibold text-gray-600 text-xs w-2/5">
                        قیمت
                    </th>
                    <th class="font-semibold text-gray-600 text-xs w-2/5">
                        قیمت کل
                    </th>
                </tr>
              </thead>
              <tbody>
                  
              </tbody>
          </table>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 flex-row-reverse">
            <div class="flex w-2/5 flex-row-reverse">
              <div class="w-20">
                <img
                  class="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Iphone 6S</span>
                <span class="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                value="1"
              />
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          </div>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithLayoutpages(Cart);
