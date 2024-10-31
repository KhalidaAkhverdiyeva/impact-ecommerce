"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityBlock = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  return (
    <div className="py-[15px] ">
      <p>
        <span className="text-[#8d8c8c] pr-[5px]">Quantity:</span>
      </p>
      <div className="flex w-[140px] items-center gap-2 mt-4 border border-gray-200 p-2 ">
        <button
          onClick={decrement}
          className="flex-1 text-lg flex justify-center items-center"
        >
          <FaMinus size={14} />
        </button>
        <span className="text-lg flex-1 text-center">{quantity}</span>
        <button
          onClick={increment}
          className="flex-1 flex justify-center items-center"
        >
          <FaPlus size={14} />
        </button>
      </div>
    </div>
  );
};

export default QuantityBlock;
