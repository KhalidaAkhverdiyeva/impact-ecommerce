"use client";
import { useState } from "react";

interface QuantityBlockProps {
  onQuantityChange: (quantity: number) => void;
}

const QuantityBlock: React.FC<QuantityBlockProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-[10px] py-[15px]">
      <div className="flex border-[1px] border-solid border-[#E6E6E6] text-[#272727]">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="px-[16px] py-[12px] border-r-[1px] border-solid border-[#E6E6E6]"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
          className="w-[50px] text-center outline-none"
          min="1"
        />
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="px-[16px] py-[12px] border-l-[1px] border-solid border-[#E6E6E6]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityBlock;
