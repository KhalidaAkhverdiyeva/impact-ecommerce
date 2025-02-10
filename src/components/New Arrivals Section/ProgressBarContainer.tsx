import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProgressBarContainerProps {
  scrollProgress: number;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  scrollProgress,
  onScrollLeft,
  onScrollRight,
  canScrollLeft,
  canScrollRight,
}) => {
  return (
    <div className="flex items-center py-[30px] w-[90vw] md:w-[91vw] lg:w-[93vw] mx-[20px] md:mx-[32px] lg:mx-[48px] max-w-[1500px]">
      <div className="bg-[#E9E9E9] h-[2px] flex-grow">
        <div
          className="bg-[#272727] h-[2px]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="hidden md:flex gap-3 z-20 ml-[20px]">
        <button
          onClick={onScrollLeft}
          className={`border-[1px] flex justify-center items-center w-[36px] h-[36px] md:w-[56px] md:h-[56px] border-solid rounded-full transition-colors ${
            canScrollLeft
              ? "text-[#272727] border-[#272727] cursor-pointer"
              : "text-[#d3d2d2] border-[#d3d2d2] cursor-not-allowed"
          }`}
          disabled={!canScrollLeft}
        >
          <LuChevronLeft size={20} />
        </button>
        <button
          onClick={onScrollRight}
          className={`border-[1px] flex justify-center items-center w-[36px] h-[36px] md:w-[56px] md:h-[56px] border-solid rounded-full transition-colors ${
            canScrollRight
              ? "text-[#272727] border-[#272727] cursor-pointer"
              : "text-[#d3d2d2] border-[#d3d2d2] cursor-not-allowed"
          }`}
          disabled={!canScrollRight}
        >
          <LuChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProgressBarContainer;
