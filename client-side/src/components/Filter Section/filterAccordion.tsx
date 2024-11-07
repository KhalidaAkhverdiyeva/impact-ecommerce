import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomSwitch from "./customSwitch";
import { Tooltip } from "@mui/material";

const FilterAccordion = () => {
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const colorOptions = [
    { color: "#9B503D", name: "Brown" },
    { color: "#F3DF66", name: "Yellow" },
    { color: "#5D89A2", name: "Teal" },
  ];

  return (
    <div className="hidden lg:block w-[300px] mx-auto text-[#272727]">
      <div className="flex justify-between py-[20px] border-t-[1px]">
        <div className="font-[700] text-[18px]">In stock only</div>
        <CustomSwitch />
      </div>

      {/* Designer Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsDesignerOpen(!isDesignerOpen)}
        >
          <div className="font-[700] text-[18px]">Designer</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] space-y-2 text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out ${
            isDesignerOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {[
            "Andreas Engesvik",
            "Pierre Charpin",
            "George Sowden",
            "Thomas Bentzen",
            "Phanta",
          ].map((designer) => (
            <label key={designer} className="flex items-center capitalize">
              <input type="checkbox" className="mr-2 custom-checkbox" />
              {designer}
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsColorOpen(!isColorOpen)}
        >
          <div className="font-[700] text-[18px]">Color</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] flex gap-[13px] text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out ${
            isColorOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {colorOptions.map(({ color, name }) => (
            <Tooltip key={color} title={name} placement="top">
              <div
                className={`w-[40px] h-[16px] cursor-pointer`}
                style={{ backgroundColor: color }}
                onClick={() => console.log(`${name} color clicked`)}
              />
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsTypeOpen(!isTypeOpen)}
        >
          <div className="font-[700] text-[18px]">Product Type</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] space-y-2 text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out ${
            isTypeOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {["Office", "Decoration", "Product type", "Lighting", "Books"].map(
            (type) => (
              <label key={type} className="flex items-center capitalize">
                <input type="checkbox" className="mr-2 custom-checkbox" />
                {type}
              </label>
            )
          )}
        </div>
      </div>

      {/* Price Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <div className="font-[700] text-[18px]">Price</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] ml-[20px] overflow-hidden transition-all duration-300 ease-in-out ${
            isPriceOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {isPriceOpen && (
            <>
              <input type="range" min="0" max="1000" className="w-full" />
              <div className="flex justify-between text-sm mt-2">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
