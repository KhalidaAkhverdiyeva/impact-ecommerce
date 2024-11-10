"use client";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface SortByProps {
  setSortOption: (sortOption: string) => void;
}

const SortBy: React.FC<SortByProps> = ({ setSortOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="flex gap-[10px] relative z-20">
      <div className="font-[700]">Sort by:</div>
      <div className="flex gap-[10px] cursor-pointer" onClick={toggleDropdown}>
        <p>Featured</p>
        <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
          <IoChevronDownOutline />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-[30px] left-0 bg-white shadow-lg rounded-md p-[10px] w-[150px]">
          <ul className="flex flex-col gap-[5px]">
            <li
              className="hover:bg-gray-100 p-[5px] rounded-md"
              onClick={() => handleSortChange("Alphabetically")}
            >
              Alphabetically
            </li>
            <li
              className="hover:bg-gray-100 p-[5px] rounded-md"
              onClick={() => handleSortChange("Price: Low to High")}
            >
              Price: Low to High
            </li>
            <li
              className="hover:bg-gray-100 p-[5px] rounded-md"
              onClick={() => handleSortChange("Price: High to Low")}
            >
              Price: High to Low
            </li>
            <li
              className="hover:bg-gray-100 p-[5px] rounded-md"
              onClick={() => handleSortChange("Newest")}
            >
              Newest
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBy;
