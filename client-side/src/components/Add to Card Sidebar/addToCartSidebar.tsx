"use client";
import React, { useEffect, useState } from "react";
import SmallProductCards from "./smallProductCards";

interface SearchSidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToCartSidebar: React.FC<SearchSidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setOverlayVisible(true);
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    } else {
      setTextVisible(false);
      setTimeout(() => {
        setOverlayVisible(false);
      }, 300);
    }
  }, [isOpen]);

  const closeSidebar = () => {
    setTextVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <>
      {overlayVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-[70] transition-opacity duration-300 ease-in-out ${
            overlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-[95%] m-[20px] z-[70] bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-[650px]" : "w-0"
        } overflow-hidden`}
      >
        {/* Main content */}
        <div
          className={`p-[40px] text-[#272727] flex flex-col gap-[20px] transition-opacity duration-300 ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-[10px]">
            <h2 className="text-[24px] font-bold">Cart</h2>
            <div className="bg-[#272727] w-[20px] h-[20px] flex justify-center items-center rounded-full">
              <span className="text-white text-[14px]">5</span>
            </div>
            <button
              className="absolute top-[40px] right-[40px] text-gray-600 text-2xl"
              onClick={closeSidebar}
            >
              &times;
            </button>
          </div>
          <div className="border-b-solid border-b-[4px] pb-[10px] border-b-[#272727]">
            <p>You are eligible for free shipping</p>
          </div>
          <SmallProductCards />
          <SmallProductCards />
        </div>

        <div
          className={`border-t-solid border-t-[1px] border-t-[#dddcdc] pt-[24px] px-[40px] pb-[40px] transition-opacity duration-300 ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between text-[26px] font-[700]">
            <p>Total</p>
            <p>$370.00 USD</p>
          </div>
          <p className="text-[#7e7e7e]">
            Tax included and shipping calculated at checkout
          </p>
          <div className="flex flex-col md:flex-row gap-[10px] py-[15px]">
            <button className="py-[16px] px-[32px] bg-[#3C619E] text-white font-[700] w-[100%]">
              View Cart
            </button>
            <button className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartSidebar;
