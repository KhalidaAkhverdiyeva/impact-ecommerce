"use client";
import { Header } from "@/components/Layout/Header/header";
import React, { useEffect, useState } from "react";
import { useCart } from "@/contexts/cartContext";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";
import { hexToColorName } from "@/utils";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const {
    cartItems,
    isLoading,
    cartTotal,
    fetchCart,
    products,
    removeFromCart,
    enrichedCartItems,
  } = useCart();
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
    if (!userId) {
      router.push("/login");
      return;
    }
    fetchCart();
  }, [fetchCart, router]);

  const handleCheckout = () => {
    if (!enrichedCartItems?.length) {
      setCheckoutError("Your cart is empty");
      return;
    }
    router.push("/checkout");
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      try {
        const item = cartItems.find((item) => item._id === itemId);
        if (item) {
          // First update the cart item in the backend
          const response = await fetch(
            `https://impact-server-side.onrender.com/api/cart/${itemId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                quantity: newQuantity,
                colorId: item.colorId,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to update quantity");
          }

          // Then refresh the cart
          await fetchCart();
        }
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };

  if (!isLoggedIn) {
    return null; // Router will handle redirect
  }

  return (
    <div className="min-h-screen ">
      <Header transparent={false} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#282828] text-center mb-10">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Cart Items Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl  p-6">
              {/* Column Headers */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b mb-4">
                <div className="col-span-6">
                  <h3 className="font-semibold  text-gray-800">Product</h3>
                </div>
                <div className="col-span-3 text-center">
                  <h3 className="font-semibold  text-gray-800">Quantity</h3>
                </div>
                <div className="col-span-3 text-right">
                  <h3 className="font-semibold  text-gray-800">Total</h3>
                </div>
              </div>

              {isLoading ? (
                <p className="text-center text-gray-500">
                  Loading cart items...
                </p>
              ) : cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => {
                    const product = products[item.productId];
                    const colorVariant = product?.colorVariants?.find(
                      (v) => v._id === item.colorId
                    );
                    const itemTotal = product?.price * item.quantity;

                    return (
                      <div
                        key={item._id}
                        className="grid grid-cols-12 gap-4 items-center py-4 border-b last:border-b-0"
                      >
                        {/* Product Info */}
                        <div className="col-span-6 flex gap-4">
                          <div className="w-[95px] h-[125px] relative">
                            {colorVariant?.mainImage && (
                              <Image
                                src={colorVariant.mainImage}
                                alt={product.title}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex flex-col gap-[5px] justify-center">
                            <p className="font-bold">{product?.title}</p>
                            <p className="text-gray-600">
                              ${product?.price}.00
                            </p>
                            <p className="text-gray-600 capitalize">
                              {hexToColorName(colorVariant?.color || "#000000")}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="col-span-3 flex flex-col items-center gap-2">
                          <div className="flex items-center border">
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity - 1
                                )
                              }
                              className="px-3 py-1 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item._id,
                                  parseInt(e.target.value) || 0
                                )
                              }
                              min="0"
                              className="w-12 h-10 border-x text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity + 1
                                )
                              }
                              className="px-3 py-1 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-gray-600 text-sm hover:text-gray-950"
                          >
                            Remove
                          </button>
                        </div>

                        {/* Total Price */}
                        <div className="col-span-3 text-right">
                          <p className="text-[#696969]">
                            ${itemTotal?.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:w-1/3">
            <div className="bg-white  border p-[40px]">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    ${cartTotal.toFixed(2)} USD
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">
                      ${cartTotal.toFixed(2)} USD
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Tax included and shipping calculated at checkout
                  </p>
                </div>
                {checkoutError && (
                  <p className="text-red-500 text-sm text-center">
                    {checkoutError}
                  </p>
                )}
                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className="w-full bg-[#424140] text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
