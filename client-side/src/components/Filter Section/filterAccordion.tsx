import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomSwitch from "./customSwitch";

const FilterAccordion = () => {
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

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
        {isDesignerOpen && (
          <div className="mt-[10px] space-y-2 text-[#7a7979]">
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
        )}
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
        {isColorOpen && (
          <div className="mt-[10px] ml-[20px] flex gap-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
        )}
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
        {isPriceOpen && (
          <div className="mt-[10px] ml-[20px]">
            <input type="range" min="0" max="1000" className="w-full" />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAccordion;
