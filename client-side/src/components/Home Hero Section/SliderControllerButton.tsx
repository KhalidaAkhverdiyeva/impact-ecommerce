import { SliderControllerButtonProps } from "@/types/Slider Button Types/SliderButtonTypes";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const SliderControllerButton: React.FC<SliderControllerButtonProps> = ({
  goToPrevSlide,
  goToNextSlide,
}) => {
  return (
    <div className="absolute bottom-4 right-4 md:bottom-[30px] md:right-[30px] lg:bottom-[40px] lg:right-[40px]  flex gap-3 z-20">
      <button
        onClick={goToPrevSlide}
        className="text-white border-2 flex justify-center items-center w-10 h-10 md:w-[56px] md:h-[56px] border-solid border-white rounded-full"
      >
        <LuChevronLeft size={20} />
      </button>
      <button
        onClick={goToNextSlide}
        className="text-white border-2 flex justify-center items-center w-10 h-10 md:w-[56px] md:h-[56px] border-solid border-white rounded-full"
      >
        <LuChevronRight size={20} />
      </button>
    </div>
  );
};

export default SliderControllerButton;
