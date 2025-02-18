import { useCart } from "@/contexts/cartContext";
import { Link } from "@/i18n/routing";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import SearchDrawer from "./searchDrawer";

interface IconButtonsProps {
  openDropdown: string | null;
  openSidebar: () => void;
  setIsAddCartOpen: (isOpen: boolean) => void;
}

export const IconButtons = ({  setIsAddCartOpen }: IconButtonsProps) => {
  const { cartItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-[15px]">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:block"
          aria-label="Search"
        >
          <IoSearch className="text-[22px]" />
        </button>
        <Link href="/account" aria-label="Account">
          <AiOutlineUser className="text-[22px]" />
        </Link>
        <button
          onClick={() => setIsAddCartOpen(true)}
          className="relative"
          aria-label="Cart"
        >
          <FiShoppingCart className="text-[22px]" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
