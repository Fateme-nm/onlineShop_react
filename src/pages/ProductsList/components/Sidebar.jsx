import React from "react";

const Sidebar = () => {
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
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Bedroom"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="Bedroom"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Bedroom
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Sofa"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="Sofa"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Sofa
                </label>
                <div className="ml-auto text-gray-600 text-sm">(05)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Office"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="Office"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Office
                </label>
                <div className="ml-auto text-gray-600 text-sm">(09)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Outdoor"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="Outdoor"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Outdoor
                </label>
                <div className="ml-auto text-gray-600 text-sm">(19)</div>
              </div>
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
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-xs"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-s"
                />
                <label
                  htmlFor="size-s"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-m"
                  checked
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-l"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-xl"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              رنگ
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-red"
                  checked
                />
                <label
                  htmlFor="color-red"
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-white"
                />
                <label
                  htmlFor="color-white"
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-black"
                />
                <label
                  htmlFor="color-black"
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
