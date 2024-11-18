"use client";
import React, { useEffect, useState } from "react";
import SmallProductCards from "./smallProductCards";
import { Product } from "@/types/productCardTypes";
import { useRouter } from "@/i18n/routing";

interface AddToCartSidebarProps {
  isAddToCartOpen: boolean;
  setIsAddCartOpen: (isOpen: boolean) => void;
  product: Product;
}

const AddToCartSidebar: React.FC<AddToCartSidebarProps> = ({
  isAddToCartOpen,
  setIsAddCartOpen,
  product,
}) => {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() => {
    if (isAddToCartOpen) {
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
  }, [isAddToCartOpen]);

  const closeSidebar = () => {
    setTextVisible(false);
    setTimeout(() => setIsAddCartOpen(false), 300);
  };

  const handleLoginRedirect = () => {
    router.push("/login");
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
          isAddToCartOpen ? "w-[650px]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`p-[40px] text-[#272727] flex flex-col gap-[20px] transition-opacity duration-300 ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {isLoggedIn ? (
            <>
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
              <SmallProductCards product={product} />
            </>
          ) : (
            <div className="flex flex-col items-center gap-[20px] text-center">
              <h2 className="text-[24px] font-bold">You need to log in</h2>
              <p className="text-[#7e7e7e]">
                Please log in to add products to your cart.
              </p>
              <button
                className="py-[16px] px-[32px] bg-[#272727] text-white font-[700] rounded-lg"
                onClick={handleLoginRedirect}
              >
                Go to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCartSidebar;
