import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const SortBy: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
      {/* Dropdown content */}
      {isDropdownOpen && (
        <div className="absolute top-[30px] left-0 bg-white shadow-lg rounded-md p-[10px] w-[150px]">
          <ul className="flex flex-col gap-[5px]">
            <li className="hover:bg-gray-100 p-[5px] rounded-md">Featured</li>
            <li className="hover:bg-gray-100 p-[5px] rounded-md">
              Price: Low to High
            </li>
            <li className="hover:bg-gray-100 p-[5px] rounded-md">
              Price: High to Low
            </li>
            <li className="hover:bg-gray-100 p-[5px] rounded-md">Newest</li>
            <li className="hover:bg-gray-100 p-[5px] rounded-md">
              Best Sellers
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBy;
