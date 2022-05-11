import React from "react";

const ThThead = ({ children, category , handleFiltering}) => {
  if (category) {
    return (
      <th className="relative border-primary border-b">
        <select className="appearance-none h-full w-full pr-8 focus:outline-none px-6 py-4 text-sm font-medium leading-4 tracking-wider  text-gray-900 bg-white" onChange={handleFiltering}>
          <option value='all'>{children}</option>
          {category.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </th>
    );
  }
  return (
    <th className="px-6 py-3 text-sm font-medium leading-4 tracking-wider  border-b border-primary text-gray-900 bg-white">
      {children}
    </th>
  );
};

export default ThThead;
