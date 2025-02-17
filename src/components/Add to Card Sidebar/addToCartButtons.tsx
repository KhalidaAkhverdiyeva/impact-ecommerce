import { getStripe } from "@/app/utils/stripe";
import { useCart } from "@/contexts/cartContext";
import { Link } from "@/i18n/routing";
import React from "react";

const AddToCartButtons = () => {
  const { cartItems } = useCart();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (!stripe) return;

    const response = await fetch(
      "http://localhost:3001/api/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      }
    );

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };
  return (
    <div className="flex gap-[20px]">
      <Link
        href="/cart"
        className="py-[16px] px-[32px] bg-[#3C619E] text-center text-white font-[700] w-[100%]"
      >
        View Cart
      </Link>
      <button
        onClick={handleCheckout}
        className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px]"
      >
        Buy it now
      </button>
    </div>
  );
};

export default AddToCartButtons;
