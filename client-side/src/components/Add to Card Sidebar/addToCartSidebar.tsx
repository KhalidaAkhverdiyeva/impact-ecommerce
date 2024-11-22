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
  const [loading, setLoading] = useState<boolean>(true);
  const [userCartItems, setUserCartItems] = useState<CartItem[]>([]);
  const [isCartFetched, setIsCartFetched] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
      if (!isCartFetched) {
        fetchCartData(userId);
      }
    } else {
      setIsLoggedIn(false);
    }

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
  }, [isAddToCartOpen, isLoggedIn, isCartFetched]);

  const removeProductFromCart = (productId: string) => {
    setUserCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };
  const fetchCartData = async (userId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${userId}/cart`
      );
      const data = await response.json();

      if (response.ok) {
        setUserCartItems(data);
        setIsCartFetched(true);
      } else {
        setUserCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setUserCartItems([]);
    } finally {
      setLoading(false);
    }
  };

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
              <div className="h-[350px] overflow-y-auto">
                {loading ? (
                  <p>Loading cart items...</p>
                ) : userCartItems.length > 0 ? (
                  userCartItems.map((cartItem) => (
                    <SmallProductCards
                      key={cartItem._id}
                      productId={cartItem.productId}
                      colorId={cartItem.colorId}
                      quantity={cartItem.quantity}
                      removeProductFromCart={removeProductFromCart}
                    />
                  ))
                ) : (
                  <p className="text-center text-[#7e7e7e]">
                    Your cart is empty.
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <h3>Total</h3>
                <p>price</p>
              </div>
              <p>Tax included and shipping calculated at checkout</p>

              <div className="flex flex-col md:flex-row gap-[10px] py-[15px]">
                <button className="py-[16px] px-[32px] bg-[#3C619E] text-white font-[700] w-[100%]">
                  Add to cart
                </button>
                <button className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px]">
                  Buy it now
                </button>
              </div>
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
