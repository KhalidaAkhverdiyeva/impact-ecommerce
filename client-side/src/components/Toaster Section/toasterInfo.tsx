"use client";
import { InfoModalProps } from "@/types/infoModalTypes";
import React from "react";
import { IoClose } from "react-icons/io5";

const ToasterModal: React.FC<InfoModalProps> = ({
  closeBottomDiv,
  isClosing,
  modalInfo,
}) => {
  if (!modalInfo) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex  items-end z-50"
      onClick={closeBottomDiv}
    >
      <div
        className={`flex flex-col items-center w-[100%] m-[10px] ${
          isClosing ? "animate-slide-down" : "animate-slide-up"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="rounded-full mb-[12px] w-[48px] h-[48px] flex justify-center items-center bg-white text-[#272727] cursor-pointer"
          onClick={closeBottomDiv}
        >
          <IoClose size={24} />
        </button>
        <div className="bg-white rounded-[10px] p-[24px] relative w-full">
          <h4 className="font-[800] text-[18px] mt-[12px]">
            {modalInfo.title}
          </h4>
          <p className="mt-[14px] text-[14px]">{modalInfo.info}</p>
        </div>
      </div>
    </div>
  );
};

export default ToasterModal;
