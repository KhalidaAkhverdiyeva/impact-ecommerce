"use client";
import { AccordionProps } from "@/types";
import { useState, useRef, useEffect } from "react";

const Accordion: React.FC<AccordionProps> = ({ title, content, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="mx-[20px]">
      <button
        className="flex justify-between items-center w-full py-[20px] text-left"
        onClick={toggleAccordion}
      >
        <span className="text-[16px] md:text-[18px] text-[#272727] w-[270px] font-[800] flex-grow">
          {title}
        </span>
        <div
          className={`flex items-center justify-center w-[24px] hover:bg-[#272727] hover:text-[white] h-[24px] rounded-full transition-colors duration-300 ${
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
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isLast ? "" : "border-b border-gray-300"
        }`}
        style={{ maxHeight: "0px" }}
      >
        <div className="pt-[5px] pb-[20px] text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
