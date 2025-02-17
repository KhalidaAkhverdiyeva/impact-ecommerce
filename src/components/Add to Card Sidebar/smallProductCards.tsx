/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/cartContext";
import { Product, SmallProductCardsProps } from "@/types";
import { hexToColorName } from "@/app/utils";

const SmallProductCards: React.FC<SmallProductCardsProps> = ({
  colorId,
  productId,
  _id,
  quantity,
}) => {
  const [smallCardData, setSmallCardData] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { removeFromCart, updateQuantity, cartItems } = useCart();
  const [isFetching, setIsFetching] = useState(false);

  // Calculate total quantity for this product
  const totalQuantity = useMemo(() => {
    return cartItems
      .filter(
        (item) => item.productId === productId && item.colorId === colorId
      )
      .reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems, productId, colorId]);

  const [localQuantity, setLocalQuantity] = useState(quantity);

  useEffect(() => {
    setLocalQuantity(totalQuantity);
  }, [totalQuantity]);

  const fetchProductData = useCallback(async () => {
    if (!productId) return;

    setIsFetching(true);
    try {
      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/products/all/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      setSmallCardData(data.product);
    } catch (err) {
      setError("Failed to load product data.");
    } finally {
      setIsFetching(false);
    }
  }, [productId]);

  useEffect(() => {
    if (!smallCardData && productId && !isFetching) {
      fetchProductData();
    }
  }, [productId, fetchProductData, isFetching, smallCardData]);

  if (error) return <div className="text-red-500">{error}</div>;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 0;
    if (newQuantity >= 0) {
      setLocalQuantity(newQuantity);
      // Update quantity for specific product + color combination
      updateQuantity(productId, newQuantity, colorId);
    }
  };

  const handleRemove = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not logged in");
      }

      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart/${_id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      removeFromCart(_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to remove item");
    }
  };

  return (
    <div className="flex items-center gap-[20px]">
      {smallCardData ? (
        <div className="flex items-center gap-[20px] w-[100%] pr-[20px] mb-[20px]">
          <div className="w-[95px] h-[125px] relative">
            {smallCardData.colorVariants?.find(
              (variant) => variant._id === colorId
            )?.mainImage && (
              <Image
                src={
                  smallCardData.colorVariants.find(
                    (variant) => variant._id === colorId
                  )?.mainImage || ""
                }
                alt={`${smallCardData.title} - ${
                  smallCardData.colorVariants.find(
                    (variant) => variant._id === colorId
                  )?.color
                }`}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-[5px] w-[68%]">
            <p className="font-[700]">{smallCardData.title}</p>
            <p className="text-[#272727a5]">${smallCardData.price}.00</p>
            <p className="text-[#272727a5] capitalize">
              {hexToColorName(
                smallCardData.colorVariants.find(
                  (variant) => variant._id === colorId
                )?.color || "#000000"
              )}
            </p>
          </div>
          <div className="flex flex-col items-center gap-[5px]">
            <input
              type="number"
              value={localQuantity}
              onChange={handleQuantityChange}
              min="0"
              className="flex justify-center items-center text-[#5c5a5aa5] border border-[#2727274f] w-[48px] h-[38px] text-center"
            />
            <button
              aria-label="Remove"
              onClick={handleRemove}
              className="text-[#545353a5] hover:text-[#272727] transition-all ease-in-out underline mt-[5px] text-[14px] cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SmallProductCards;
