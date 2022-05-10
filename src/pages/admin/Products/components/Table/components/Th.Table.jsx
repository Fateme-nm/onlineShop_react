import React from "react";

const ThTable = ({children}) => {
  return (
    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider  text-white uppercase border-b border-gray-200 bg-primary">
      {children}
    </th>
  );
};

export default ThTable;
