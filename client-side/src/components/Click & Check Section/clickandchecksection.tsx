"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import InfoModal from "./Info Modal/infoModal";
import { ModalInfo } from "@/types/Info Modal Types/infoModalTypes";

const ClickandCheckSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  const images = [
    {
      srcSet:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_soft_black_Result_Chair_black_wb_lacquer_oak_Terrazzo_Table.jpg?v=1653301777&width=2200",
      mobileSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_soft_black_Result_Chair_black_wb_lacquer_oak_Terrazzo_Table_mobile.jpg?v=1653302092&width=1200",
      tabletSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_soft_black_Result_Chair_black_wb_lacquer_oak_Terrazzo_Table.jpg?v=1653301777&width=1400",
    },
  ];

  const toggleBottomDiv = (info: ModalInfo) => {
    setModalInfo(info);
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      closeBottomDiv();
    }
  };

  const closeBottomDiv = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  // Sample modal information
  const sampleModalInfo = [
    {
      iconImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fimpact-theme-home.myshopify.com%2Fcdn%2Fshop%2Ffiles%2Ficon-brightness.png%3Fv%3D1653312415%26width%3D48&w=48&q=75",
      altImg: "sunIicon",
      title: "Dimmable",
      info: "Integrated touch step dimmer switch with three standard settings.",
    },
    {
      iconImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fimpact-theme-home.myshopify.com%2Fcdn%2Fshop%2Ffiles%2Ficon-lightbulb.png%3Fv%3D1653312427%26width%3D48&w=48&q=75",
      altImg: "bulbIcon",
      title: "Light source",
      info: "Includes replaceable LED light source ensuring a life span of at least 25,000 hours of use",
    },
  ];

  return (
    <div className="py-[50px]">
      <div className="relative">
        {/* Text Content */}
        <div className="max-w-[1600px] mx-auto mb-[50px] lg:absolute lg:inset-0 flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-[48px] px-[20px] md:px-[32px] lg:text-left lg:z-10">
          <div className="max-w-[700px] w-full lg:w-[330px]">
            <h3 className="text-[32px] text-[#272727] lg:text-white md:text-[40px] lg:text-[48px] leading-[1] font-[800]">
              About the PC Portable Lamp
            </h3>
            <p className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] lg:text-white font-[400] pb-[20px]">
              Constructed in robust plastic and featuring a matte scratch- and
              water-resistant finish, its battery-powered design gives the
              freedom and flexibility to move it anywhere.
            </p>
            <button className="text-white mt-[30px] bg-[#272727] font-[700] lg:text-[#272727] lg:bg-white w-[135px] py-[13px] px-[24px] flex gap-[5px] items-center">
              Learn more
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {images.map((image) => (
            <picture key={image.srcSet} className="w-full">
              <source media="(min-width: 640px)" srcSet={image.tabletSrc} />
              <source media="(min-width: 1024px)" srcSet={image.srcSet} />
              <img
                src={image.mobileSrc}
                alt="lamp img"
                className="w-full h-full object-cover"
              />
            </picture>
          ))}

          {/* Buttons */}
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
      </div>
      {isOpen && (
        <InfoModal
          closeBottomDiv={closeBottomDiv}
          isClosing={isClosing}
          modalInfo={modalInfo}
        />
      )}
    </div>
  );
};

export default ClickandCheckSection;
