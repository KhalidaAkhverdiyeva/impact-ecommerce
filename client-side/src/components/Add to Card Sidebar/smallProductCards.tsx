import { Product } from "@/types/productCardTypes";
import React from "react";

interface SmallProductCardsProps {
  product: Product;
}
const SmallProductCards: React.FC<SmallProductCardsProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="w-[95px] h-[125px]">
        <img
          src={product.colorVariants[0].mainImage}
          alt={product.title}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[5px] w-[68%]">
        <p className="font-[700]">{product.title}</p>
        <p className="text-[#272727a5]">${product.price}</p>
        <p className="text-[#272727a5]">{product.colors}</p>
      </div>
      <div>
        {/* <div className="flex justify-center items-center text-[#5c5a5aa5] border border-[#2727274f] w-[48px] h-[38px]">
          {product.quantity}
        </div> */}
        <p className="text-[#545353a5] hover:text-[#272727] transition-all ease-in-out underline mt-[5px] text-[14px] cursor-pointer">
          Remove
        </p>
      </div>
    </div>
  );
};

export default SmallProductCards;
