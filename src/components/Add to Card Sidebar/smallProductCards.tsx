/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/cartContext";
import { SmallCardData, SmallProductCardsProps } from "@/types";


const SmallProductCards: React.FC<SmallProductCardsProps> = ({
  colorId,
  quantity,
  productId,
}) => {
  const [smallCardData, setSmallCardData] = useState<SmallCardData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const { removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const fetchProductwithIds = async () => {
      try {
        const response = await fetch(
          `https://impact-server-side-production.up.railway.app/api/products/all/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setSmallCardData(data.product);
        } else {
          setError("Failed to fetch product details");
        }
      } catch (err) {
        setError("Error fetching product details");
      }
    };

    fetchProductwithIds();
  }, [productId]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 0;
    if (newQuantity >= 0) {
      setLocalQuantity(newQuantity);
      updateQuantity(productId, newQuantity);

      // Update backend
      updateBackendQuantity(newQuantity);
    }
  };

  const updateBackendQuantity = async (newQuantity: number) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      await fetch(
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart/${productId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );
    } catch (err) {
      setError("Failed to update quantity");
    }
  };

  const handleRemove = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("User is not logged in");
      return;
    }

    try {
      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId,
            colorId,
          }),
        }
      );

      if (response.ok) {
        removeFromCart(productId);
      } else {
        setError("Failed to remove item from cart");
      }
    } catch (err) {
      setError("Error removing item from cart");
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex items-center gap-[20px]">
      {smallCardData ? (
        <div className="flex items-center gap-[20px] w-[100%] pr-[20px] mb-[20px]">
          <div className="w-[95px] h-[125px] relative">
            {smallCardData.colorVariants?.[0]?.mainImage && (
              <Image
                src={smallCardData.colorVariants[0].mainImage}
                alt={smallCardData.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-[5px] w-[68%]">
            <p className="font-[700]">{smallCardData.title}</p>
            <p className="text-[#272727a5]">${smallCardData.price}</p>
            <p className="text-[#272727a5]">{smallCardData.colors}</p>
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
