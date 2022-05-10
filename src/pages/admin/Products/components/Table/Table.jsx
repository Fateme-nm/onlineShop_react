import React from "react";
import ThTable from "./components/Th.Table";

const Table = () => {
  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThTable>حذف</ThTable>
                <ThTable>ویرایش</ThTable>
                <ThTable>دسته بندی</ThTable>
                <ThTable>نام کالا</ThTable>
                <ThTable>تصویر</ThTable>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <i
                    className="fa fa-trash text-red-400 cursor-pointer"></i>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <i class="fas fa-edit text-blue-400 cursor-pointer"></i>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">
                    john@example.com
                  </div>
                </td>
                <td className="flex justify-end px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
