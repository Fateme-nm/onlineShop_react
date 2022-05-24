import React, { useState } from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";
import ReactPaginate from "react-paginate";
import {separate, persinaDigit} from 'utils';

const Table = ({ products, setIsSubmiting }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const pricesPerPage = 4;
  const pagesVisited = pageNumber * pricesPerPage;

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2 flex flex-col justify-center items-center space-y-8">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead>موجودی</ThThead>
                <ThThead>(تومان) قیمت</ThThead>
                <ThThead>کالا</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products
                .slice(pagesVisited, pagesVisited + pricesPerPage)
                .map((product) => {
                  return (
                    <TrTbody
                      name={product.name}
                      price={persinaDigit(separate(product.price))}
                      count={persinaDigit(product.count)}
                      setIsSubmiting={setIsSubmiting}
                      id={product.id}
                      key={product.id}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={<i className="	fa fa-chevron-left text-primary"></i>}
          nextLabel={<i className="	fa fa-chevron-right text-primary"></i>}
          pageCount={Math.ceil(products.length / pricesPerPage)}
          onPageChange={({ selected }) => setPageNumber(selected)}
          containerClassName={"flex space-x-5"}
          activeClassName={"text-primary"}
        />
      </div>
    </div>
  );
};

export default Table;
