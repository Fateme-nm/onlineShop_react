import React, {useState} from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";

const Table = ({ products }) => {

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead>موجودی</ThThead>
                <ThThead>قیمت</ThThead>
                <ThThead>کالا</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((product) => {
                return (
                  <TrTbody
                    name={product.name}
                    price={product.price}
                    count={product.count}
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
