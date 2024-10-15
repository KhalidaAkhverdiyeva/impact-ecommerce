"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ClickandCheckSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // New state for closing animation
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

  const toggleBottomDiv = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      closeBottomDiv(); // Trigger close animation
    }
  };

  const closeBottomDiv = () => {
    setIsClosing(true); // Start closing animation
    setTimeout(() => {
      setIsOpen(false); // Actually close the modal after animation ends
      setIsClosing(false); // Reset closing state
      document.body.style.overflow = "auto"; // Enable scrolling
    }, 300); // Duration should match the animation duration
  };

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
            onClick={toggleBottomDiv}
            className="absolute top-[48%] left-[60%] sm:top-[46%] sm:left-[55%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
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

      {/* Overlay and Bottom Section */}
      {isOpen && (
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
                Integrated touch step dimmer switch with three standard
                settings.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickandCheckSection;
