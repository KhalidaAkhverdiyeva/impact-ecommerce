import { useCart } from "@/contexts/cartContext";
import { Link } from "@/i18n/routing";
import React from "react";

const AddToCartButtons = () => {
  const { enrichedCartItems } = useCart();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5">
        <Link
          href="/cart"
          className="py-4 px-8 bg-[#3C619E] text-center text-white font-bold w-full"
        >
          View Cart
        </Link>
        <Link
          href="/checkout"
          className={`bg-[#272727] font-bold w-full text-white px-8 py-4 text-center
            ${
              !enrichedCartItems?.length ? "opacity-50 pointer-events-none" : ""
            }
            hover:bg-[#3a3a3a] transition-colors duration-200`}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default AddToCartButtons;
