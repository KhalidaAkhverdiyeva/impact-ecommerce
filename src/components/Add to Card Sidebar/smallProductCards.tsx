/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/cartContext";
import { SmallProductCardsProps } from "@/types";
import { hexToColorName } from "@/utils";

const SmallProductCards: React.FC<SmallProductCardsProps> = ({
  colorId,
  productId,
  _id,
  quantity,
}) => {
  const [error, setError] = useState<string | null>(null);
  const { removeFromCart, updateQuantity, products } = useCart();

  const [localQuantity, setLocalQuantity] = useState(quantity);

  // Get product from context instead of fetching
  const product = products[productId];

  if (error) return <div className="text-red-500">{error}</div>;
  if (!product) return <div>Loading...</div>;

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
      await removeFromCart(_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to remove item");
    }
  };

  return (
    <div className="flex items-center gap-[20px]">
      <div className="flex items-center gap-[20px] w-[100%] pr-[20px] mb-[20px]">
        <div className="w-[95px] h-[125px] relative">
          {product.colorVariants?.find((variant) => variant._id === colorId)
            ?.mainImage && (
            <Image
              src={
                product.colorVariants.find((variant) => variant._id === colorId)
                  ?.mainImage || ""
              }
              alt={`${product.title} - ${
                product.colorVariants.find((variant) => variant._id === colorId)
                  ?.color
              }`}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-[5px] w-[68%]">
          <p className="font-[700]">{product.title}</p>
          <p className="text-[#272727a5]">${product.price}.00</p>
          <p className="text-[#272727a5] capitalize">
            {hexToColorName(
              product.colorVariants.find((variant) => variant._id === colorId)
                ?.color || "#000000"
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
    </div>
  );
};

export default SmallProductCards;
