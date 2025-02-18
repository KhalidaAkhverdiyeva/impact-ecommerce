import { getStripe } from "@/utils/stripe";
import { useCart } from "@/contexts/cartContext";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";

const AddToCartButtons = () => {
  const { enrichedCartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!enrichedCartItems?.length) {
      setError("Your cart is empty");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const stripe = await getStripe();

      if (!stripe) {
        throw new Error("Failed to initialize payment system");
      }

      // Format cart items for Stripe
      const lineItems = enrichedCartItems.map((item) => ({
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.product.price * 100),
          product_data: {
            name: item.product.title,
            images: [
              item.product.colorVariants.find(
                (variant) => variant._id === item.colorId
              )?.mainImage || "",
            ],
          },
        },
        quantity: item.quantity,
      }));

      const response = await fetch("http://localhost:3001/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lineItems }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Checkout failed");
      }

      const { id: sessionId } = await response.json();

      const { error: redirectError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (redirectError) {
        throw new Error(redirectError.message);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(
        err instanceof Error ? err.message : "Failed to process checkout"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <div className="flex gap-5">
        <Link
          href="/cart"
          className="py-4 px-8 bg-[#3C619E] text-center text-white font-bold w-full"
        >
          View Cart
        </Link>
        <button
          onClick={handleCheckout}
          disabled={isLoading || !enrichedCartItems?.length}
          className="bg-[#272727] font-bold w-full text-white px-8 py-4 disabled:opacity-50 
            hover:bg-[#3a3a3a] transition-colors duration-200"
        >
          {isLoading ? "Processing..." : "Buy it now"}
        </button>
      </div>
    </div>
  );
};

export default AddToCartButtons;
