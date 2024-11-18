"use client";
import { useColor } from "@/contexts/colorContext";
import { Link } from "@/i18n/routing";
import { Product } from "@/types/productCardTypes";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import AddToCartSidebar from "../Add to Card Sidebar/addToCartSidebar";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  console.log(product, "from product card");
  const { selectedColor, setSelectedColor } = useColor();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const selectedVariant =
    product.colorVariants.find((variant) => variant.color === selectedColor) ||
    product.colorVariants[0];

  const mainImage = selectedVariant?.mainImage || "";
  const hoverImage = selectedVariant?.hoverImage || "";

  const handleColorSelect = (color: string, index: number) => {
    setSelectedColor(color);
    setSelectedColorIndex(index);
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

  const calculateDiscount = (price: number, oldPrice: number) => {
    if (oldPrice && oldPrice > price) {
      return Math.round(((oldPrice - price) / oldPrice) * 100);
    }
    return 0;
  };

  const discountPercent = calculateDiscount(product.price, product.oldPrice);

  return (
    <div className="w-[100%]" key={product.id}>
      <div
        className="relative mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
          {discountPercent > 0 && (
            <span className="bg-[#ec6146] text-[white] w-[65px] py-[2px] font-[700] text-center mb-[10px]">
              Save {discountPercent}%
            </span>
          )}
        </div>
        <Link
          href={`/products/${product.title}?index=${selectedColorIndex}`}
          className="cursor-pointer"
        >
          <Image
            src={mainImage}
            alt={title}
            width={1200}
            height={1200}
            className={`transition-opacity duration-500 w-full h-full ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={hoverImage}
            alt={`${title} Hover`}
            width={1200}
            height={1200}
            className={`transition-opacity duration-500 absolute w-full h-full inset-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {isHovered && (
          <div
            onClick={openSidebar}
            className="absolute bottom-[15px] right-[15px] bg-[#272727] whitespace-nowrap text-white text-center py-[10px] px-[10px] text-[18px] w-[130px] font-[700] cursor-pointer transition-all duration-300 ease-in-out hover:border-solid hover:border-[2px] hover:border-[#272727] hover:text-[#272727] hover:bg-transparent z-[50]"
          >
            + Quick add
          </div>
        )}
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
              onClick={() => handleColorSelect(variant.color, index)}
              className="w-[15px] h-[9px] cursor-pointer border"
              style={{ backgroundColor: variant.color }}
            ></div>
          ))}
        </div>

        <div className="relative mt-[4px] h-1">
          <div
            className="absolute w-[15px] h-[2px] bg-black transition-all duration-300"
            style={{ left: `${selectedColorIndex * 23}px` }}
          ></div>
        </div>
      </div>
      <AddToCartSidebar
        isAddToCartOpen={isOpen}
        setIsAddCartOpen={setIsOpen}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
