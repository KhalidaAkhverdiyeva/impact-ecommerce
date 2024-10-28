"use client";
import React, { useState } from "react";
import ProductCard from "../Product Card/productCard";
import SortBy from "./sortBy";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomSwitch from "./customSwitch";

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="mb-[30px] flex justify-between">
        <div className="flex items-center gap-[10px]">
          <svg
            role="presentation"
            fill="none"
            focusable="false"
            stroke-width="2"
            width="20"
            height="14"
            viewBox="0 0 20 14"
          >
            <path
              d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z"
              fill="currentColor"
            ></path>
            <path
              d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z"
              fill="currentColor"
            ></path>
            <path
              d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z"
              fill="currentColor"
            ></path>
            <path
              d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z"
              fill="currentColor"
            ></path>
            <circle cx="7" cy="3" r="2" stroke="currentColor"></circle>
            <circle cx="13" cy="11" r="2" stroke="currentColor"></circle>
          </svg>
          Filters
        </div>
        <SortBy />
      </div>
      <div className="flex gap-[40px]">
        {/* Filter Accordion */}
        <div className="w-[300px]">
          <div className=" mx-auto  text-[#272727]">
            <div className="flex justify-between py-[20px] border-t-[1px]">
              <div className="font-[700] text-[18px]">In stock only</div>
              <CustomSwitch />
            </div>
            <div className="flex justify-between py-[20px] border-t-[1px] pr-[10px]">
              <div className="font-[700] text-[18px]">Designer</div>
              <div className="bg-[#E9E9E9] rounded-full w-[24px]  h-[24px] flex justify-center items-center">
                <IoChevronDownOutline />
              </div>
            </div>
            <div className="flex justify-between py-[20px] border-t-[1px] pr-[10px]">
              <div className="font-[700] text-[18px]">Color</div>
              <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
                <IoChevronDownOutline />
              </div>
            </div>
            <div className="flex justify-between py-[20px] border-t-[1px] pr-[10px]">
              <div className="font-[700] text-[18px]">Brand</div>
              <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
                <IoChevronDownOutline />
              </div>
            </div>
            <div className="flex justify-between py-[20px] border-t-[1px] pr-[10px]">
              <div className="font-[700] text-[18px]">Product type</div>
              <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
                <IoChevronDownOutline />
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
