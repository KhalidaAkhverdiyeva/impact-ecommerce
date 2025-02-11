import { ControlButtonsProps } from "@/types";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ControlButtons: React.FC<ControlButtonsProps> = ({
  activeIndex,
  sectionsLength,
  handleSectionClick,
}) => {
  const handleNext = () => {
    if (activeIndex < sectionsLength - 1) {
      handleSectionClick(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSectionClick(activeIndex - 1);
    }
  };
  return (
    <div className="hidden lg:flex gap-3 z-20 ml-[20px]">
      <button
        onClick={handlePrev}
        disabled={activeIndex === 0}
        className={`border-[1px] flex justify-center border-[#d3d2d2] items-center lg:w-[48px] md:h-[48px] rounded-full ${
          activeIndex === 0
            ? "text-[#d3d2d2]  cursor-not-allowed"
            : "text-black  hover:bg-gray-200"
        }`}
      >
        <LuChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        disabled={activeIndex === sectionsLength - 1}
        className={`border-[1px] flex justify-center border-[#d3d2d2] items-center lg:w-[48px] md:h-[48px] rounded-full ${
          activeIndex === sectionsLength - 1
            ? "text-[#d3d2d2]  cursor-not-allowed"
            : "text-black hover:bg-gray-200"
        }`}
      >
        <LuChevronRight size={20} />
      </button>
    </div>
  );
};

export default ControlButtons;
