"use client";
import { InfoModalProps } from "@/types/Info Modal Types/infoModalTypes";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

const InfoModal: React.FC<InfoModalProps> = ({ closeBottomDiv, isClosing }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50 "
      onClick={closeBottomDiv}
    >
      <div
        className={`flex flex-col items-center m-[10px] ${
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
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/icon-brightness.png?v=1653312415&width=48"
            alt="sunicon"
            width={24}
            height={24}
          />
          <h4 className="font-[800] text-[18px] mt-[12px]">Dimmable</h4>
          <p className="mt-[14px] text-[14px]">
            Integrated touch step dimmer switch with three standard settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
