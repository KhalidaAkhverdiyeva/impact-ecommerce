"use client";
import React, { useEffect, useState } from "react";
import SmallProductCards from "./smallProductCards";
import { useRouter } from "@/i18n/routing";
import { CartItem } from "@/types/cartItemsProps";

interface AddToCartSidebarProps {
  isAddToCartOpen: boolean;
  setIsAddCartOpen: (isOpen: boolean) => void;
}

const AddToCartSidebar: React.FC<AddToCartSidebarProps> = ({
  isAddToCartOpen,
  setIsAddCartOpen,
}) => {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userCartItems, setUserCartItems] = useState<CartItem[]>([]);
  console.log(userCartItems, "from state itself");

  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);

    if (userId) {
      fetchCartItems(userId);
    }
  }, [userCartItems]);

  const fetchCartItems = async (userId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${userId}/cart`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const cartItems = await response.json();

      // Fetch detailed product data for each cart item
      const enrichedCartItems = await Promise.all(
        cartItems.map(async (item: CartItem) => {
          const productResponse = await fetch(
            `http://localhost:3001/api/products/${item.productId}`
          );
          if (!productResponse.ok) {
            throw new Error("Failed to fetch product details");
          }
          const product = await productResponse.json();
          return { ...item, ...product };
        })
      );

      console.log("Enriched cart items:", enrichedCartItems);
      setUserCartItems(enrichedCartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

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
                  <span className="text-white text-[14px]">
                    {userCartItems.length}
                  </span>
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

              {userCartItems.length > 0 ? (
                userCartItems.map((item) => (
                  <SmallProductCards key={item._id} product={item} />
                ))
              ) : (
                <p className="text-center text-[#7e7e7e]">
                  Your cart is empty.
                </p>
              )}
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
