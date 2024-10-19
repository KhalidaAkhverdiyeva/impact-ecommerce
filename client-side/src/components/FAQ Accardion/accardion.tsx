"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="text-[16px] text-[#272727] w-[300px] font-[800] flex-grow">
          {title}
        </span>
        <div
          className={`flex items-center justify-center w-[24px] h-[24px] rounded-full transition-colors duration-300 ${
            isOpen ? "bg-[#272727] text-white" : "bg-[#DFDFDF] text-[#272727]"
          }`}
        >
          <svg
            role="presentation"
            focusable="false"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              d="m1 1.5 3 3 3-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4"
        }`}
      >
        <div className="px-4 py-[5px] text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
