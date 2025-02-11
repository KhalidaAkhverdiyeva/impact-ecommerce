import React from "react";
import { FaPlus } from "react-icons/fa6";
import { sampleModalInfo } from "@/static/PlusButtonsData";
import { ModalInfo, PlusButtonsProps } from "@/types";

const PlusButtons: React.FC<PlusButtonsProps> = ({ toggleBottomDiv }) => {
  const handleClick = (info: ModalInfo, buttonId: string) => {
    toggleBottomDiv(info, buttonId);
  };

  return (
    <div>
      <div
        id="button2"
        onClick={() => handleClick(sampleModalInfo[0], "button2")}
        className="absolute top-[48%] left-[60%] sm:top-[46%] sm:left-[55%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      >
        <div className="relative w-[42px] h-[42px] sm:w-[64px] sm:h-[64px] flex justify-center items-center">
          <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-heartbeat"></div>
          <button className="relative bg-white w-[32px] h-[32px] sm:w-[46px] sm:h-[46px] flex justify-center items-center rounded-full">
            <FaPlus className="text-[12px] sm:text-[16px]" />
          </button>
        </div>
      </div>
      <div
        id="button1"
        onClick={() => handleClick(sampleModalInfo[1], "button1")}
        className="absolute top-[27%] left-[43%] sm:top-[23%] sm:left-[49%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      >
        <div className="relative w-[42px] h-[42px] sm:w-[64px] sm:h-[64px] flex justify-center items-center">
          <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-heartbeat"></div>
          <button className="relative bg-white w-[32px] h-[32px] sm:w-[46px] sm:h-[46px] flex justify-center items-center rounded-full">
            <FaPlus className="text-[12px] sm:text-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlusButtons;
