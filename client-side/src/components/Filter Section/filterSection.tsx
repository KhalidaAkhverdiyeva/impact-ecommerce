"use client";
import React, { useState } from "react";
import ProductCard from "../Product Card/productCard";
import SortBy from "./sortBy";
import FilterAccordion from "./filterAccordion";
import ProductGrid from "../Product Card/productGrid";

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
            strokeWidth="2"
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
        <FilterAccordion />
        <ProductGrid />
      </div>
    </div>
  );
};

export default FilterSection;
