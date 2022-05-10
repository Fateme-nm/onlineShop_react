import React from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";

const Table = ({ products, category }) => {
  const getCategory = (categoryId) => {
    const cat = category.find((cat) => cat.id == categoryId);
    return cat.name;
  };
  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead>حذف</ThThead>
                <ThThead>ویرایش</ThThead>
                <ThThead>دسته بندی</ThThead>
                <ThThead>نام کالا</ThThead>
                <ThThead>تصویر</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((product) => {
                return (
                  <TrTbody
                    imgSrc={"https://source.unsplash.com/user/erondu"}
                    name={product.name}
                    category={getCategory(product.categoryId)}
                    key={product.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
