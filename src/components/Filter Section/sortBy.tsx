"use client";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface SortByProps {
  setSortOption: (sortOption: string) => void;
  currentSort: string;
}

const SortBy: React.FC<SortByProps> = ({ setSortOption, currentSort }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex gap-[10px] relative z-20">
      <div className="font-[700]">Sort by:</div>
      <div className="flex gap-[10px] cursor-pointer" onClick={toggleDropdown}>
        <p>{currentSort || "Select"}</p>
        <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
          <IoChevronDownOutline />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-[30px] right-0 bg-white shadow-lg rounded-md p-[10px] w-[200px]">
          <ul className="flex flex-col gap-[5px]">
            <li
              className={`hover:bg-gray-100 p-[5px] rounded-md cursor-pointer ${
                currentSort === "Price, low to high" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSortChange("Price, low to high")}
            >
              Price, low to high
            </li>
            <li
              className={`hover:bg-gray-100 p-[5px] rounded-md cursor-pointer ${
                currentSort === "Price, high to low" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSortChange("Price, high to low")}
            >
              Price, high to low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBy;
