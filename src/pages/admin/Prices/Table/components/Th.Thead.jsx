import React from "react";

const ThThead = ({ children }) => {
  return (
    <th className="px-6 py-4 text-sm font-medium leading-4 tracking-wider  border-b border-primary text-gray-900 bg-white">
      {children}
    </th>
  );
};

export default ThThead;
