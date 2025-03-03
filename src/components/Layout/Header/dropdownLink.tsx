import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import DesignersDropdown from "./designersDropdown";

interface DropdownLinkProps {
  name: string;
  text: string;
  openDropdown: boolean;
  toggleDropdown: (dropdown: string) => void;
  setIsDropdownOpen: (value: boolean) => void;
}

const DropdownLink = ({
  name,
  text,
  openDropdown,
  toggleDropdown,
  setIsDropdownOpen
}: DropdownLinkProps) => {
  return (
    <li>
      <button
        className="flex items-center gap-[10px]"
        onClick={() => toggleDropdown(name)}
      >
        {text}
        <FaAngleDown
          className={`transition-transform duration-300 ${
            openDropdown === true ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdown === true && <DesignersDropdown setIsDropdownOpen={setIsDropdownOpen}  />}
    </li>
  );
};

export default DropdownLink;
