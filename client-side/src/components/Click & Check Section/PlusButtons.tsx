import { sampleModalInfo } from "@/static/PlusButtonsData";
import { ModalInfo } from "@/types/infoModalTypes";
import React from "react";
import { FaPlus } from "react-icons/fa6";

interface PlusButtonsProps {
  toggleBottomDiv: (modalInfo: ModalInfo) => void;
}

const PlusButtons: React.FC<PlusButtonsProps> = ({ toggleBottomDiv }) => {
  return (
    <div>
      <div
        onClick={() => toggleBottomDiv(sampleModalInfo[0])}
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
        onClick={() => toggleBottomDiv(sampleModalInfo[1])}
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
