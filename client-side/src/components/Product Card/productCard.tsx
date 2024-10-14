import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { name: "purple", hex: "#BAB0D3" },
    { name: "blue", hex: "#5D89A2" },
    { name: "yellow", hex: "#F3DF66" },
    { name: "black", hex: "#272727" },
  ];

  const handleColorSelect = (colorName: React.SetStateAction<string>) => {
    setSelectedColor(colorName);
  };

  const selectedIndex = colors.findIndex(
    (color) => color.name === selectedColor
  );
  const underlineLeftPosition = `${selectedIndex * 23}px`;

  return (
    <div className="w-[314px] md:w-[276px] lg:w-[340px]">
      <div className="relative">
        <div className="absolute top-[10px] left-[10px] z-[40] text-[12px] flex flex-col">
          <span className="bg-[#3C619E] w-[40px] py-[2px] text-white font-[700] text-center mb-[10px] ">
            New
          </span>
          <span className="bg-[#BEBDB9] w-[65px] py-[2px] font-[700] text-center mb-[10px]  ">
            Sold Out
          </span>
          <span className="bg-[#E34F4F] text-white w-[85px] py-[2px] font-[700] text-center ">
            Save $20.00
          </span>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/products/4104312009000_PC_Portable_olive.jpg?v=1653057933&width=1200"
            alt="Product Image"
            className={`transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/products/La_Pausa_2020_PC_Portable.jpg?v=1653735810&width=1400"
            alt="Product Image Hover"
            className={`transition-opacity duration-500 absolute inset-0 ${
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
      </div>
      <div className="py-[30px]">
        <div className="flex justify-between">
          <span className="text-[11px] text-[#272727B3]">HAY</span>
          <span className="flex items-center gap-[4px]">
            <span className="text-[14px]">4.3</span>
            <IoMdStar size={18} className="text-[#FFB74A]" />
          </span>
        </div>
        <div className="text-[15px] text-[#272727] font-[800] cursor-pointer">
          PC Portable Lamp (Olive Green)
        </div>
        <div className="text-[#272727B3]">$78.00</div>

        <div className="flex gap-2 mt-4">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => handleColorSelect(color.name)}
              className="w-[15px] h-[9px] cursor-pointer border"
              style={{
                backgroundColor: color.hex,
              }}
            ></div>
          ))}
        </div>

        <div className="relative mt-[4px] h-1">
          <div
            className="absolute w-[15px] h-[2px] bg-black transition-all duration-300"
            style={{ left: underlineLeftPosition }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
