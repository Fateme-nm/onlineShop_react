import React from "react";

const Count = ({ quantity, maxQuantity, setQuantity, withOutTitle }) => {
  const handleClickQuntity = (num) => {
    if ((num === -1 && quantity > 1) || (num === 1 && quantity < maxQuantity)) {
      setQuantity(Number(quantity) + num);
    }
  };

  const handleChangeQuntity = (e) => {
    let value = e.target.value;
    const [min, max] = [1, +maxQuantity];
    if (value > max) value = max;
    else if (value < min) value = min;
    setQuantity(value);
  };

  return (
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <button
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer text-primary hover:bg-gray-100 shadow-sm rounded-sm bg-white"
          onClick={() => handleClickQuntity(-1)}
        >
          -
        </button>
        <input
          className="h-8 w-10 flex items-center justify-center text-center focus:outline-none"
          onChange={handleChangeQuntity}
          value={quantity}
          // value={persinaDigit(quantity)}
          type="text"
        />
        <button
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer text-primary hover:bg-gray-100 shadow-sm rounded-sm bg-white"
          onClick={() => handleClickQuntity(1)}
        >
          +
        </button>
      </div>
  );
};

export default Count;
