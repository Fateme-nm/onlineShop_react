import React from "react";

const ThThead = ({children}) => {
  return (
    <th className="px-6 py-3 text-sm font-medium leading-4 tracking-wider  border-b border-gray-200 text-white bg-gray-900">
      {children}
    </th>
  );
};

export default ThThead;
