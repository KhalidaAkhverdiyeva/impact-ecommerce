import React from "react";
import { FaAngleDown } from "react-icons/fa6";

interface DropdownLinkProps {
  name: string;
  text: string;
  openDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  DropdownComponent: React.ComponentType;
}

const DropdownLink = ({
  name,
  text,
  openDropdown,
  toggleDropdown,
  DropdownComponent,
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
            openDropdown === name ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdown === name && <DropdownComponent />}
    </li>
  );
};

export default DropdownLink;
