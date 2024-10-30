"use client";
import { Product } from "@/types/productCardTypes";
import React, { FC, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [isHovered, setIsHovered] = useState(false);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const {
    title,
    designer,
    price,
    rating,
    colorVariants,
    isNewProduct,
    isSoldOut,
  } = product;

  const mainImage = colorVariants[0]?.mainImage || "";
  const hoverImage = colorVariants[0]?.hoverImage || "";

  return (
    <div className="w-[100%]">
      <div className="relative mb-6">
        <div className="absolute top-[10px] left-[10px] z-[40] text-[12px] flex flex-col">
          {isNewProduct && (
            <span className="bg-[#3C619E] w-[40px] py-[2px] text-white font-[700] text-center mb-[10px]">
              New
            </span>
          )}
          {isSoldOut && (
            <span className="bg-[#BEBDB9] w-[65px] py-[2px] font-[700] text-center mb-[10px]">
              Sold Out
            </span>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={mainImage}
            alt={title}
            className={`transition-opacity duration-500 w-full h-full ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={hoverImage}
            alt={`${title} Hover`}
            className={`transition-opacity duration-500 absolute w-full h-full inset-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute transition-all duration-300 ease-in-out ${
              isHovered ? "bottom-[15px] opacity-100" : "bottom-[0] opacity-0"
            } right-[15px] flex justify-center`}
          >
            <div className="bg-[#272727] text-white text-center py-[10px] px-[10px] text-[18px] w-[130px] cursor-pointer font-[800]">
              + Quick add
            </div>
          </div>
        </div>
        <div className="py-[30px]">
          <div className="flex justify-between">
            <span className="text-[11px] text-[#272727B3]">{designer}</span>
            <span className="flex items-center gap-[4px]">
              <span className="text-[14px]">{rating}</span>
              <IoMdStar size={18} className="text-[#FFB74A]" />
            </span>
          </div>
          <div className="text-[15px] text-[#272727] font-[800] cursor-pointer">
            {title}
          </div>
          <div className="text-[#272727B3]">${price.toFixed(2)}</div>

          <div className="flex gap-2 mt-4">
            {colorVariants.map((variant, index) => (
              <div
                key={index}
                onClick={() => handleColorSelect(variant.color)}
                className="w-[15px] h-[9px] cursor-pointer border"
                style={{
                  backgroundColor: variant.color,
                }}
              ></div>
            ))}
          </div>

          <div className="relative mt-[4px] h-1">
            <div
              className="absolute w-[15px] h-[2px] bg-black transition-all duration-300"
              style={{ left: "0px" }} // This can be adjusted based on selected color
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
