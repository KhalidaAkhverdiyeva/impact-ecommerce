import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "@/i18n/routing";
import DropdownLink from "./dropdownLink";
import SearchDrawer from "./searchDrawer";
import MobileMenuDrawer from "./mobileMenuDrawer";
import { useState } from "react";

interface LeftNavProps {
  openDropdown: boolean;
  toggleDropdown: (dropdown: string) => void;
  setIsDropdownOpen: (value: boolean) => void;

}

export const LeftNav = ({ openDropdown, toggleDropdown, setIsDropdownOpen }: LeftNavProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center gap-[15px] flex-1">
      <div className="block lg:hidden">
        <IoMenu
          className="text-[30px] cursor-pointer"
          onClick={handleMobileMenuOpen}
        />
      </div>
      <ul className="text-[18px] font-[700] hidden lg:flex lg:gap-[30px]">
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <DropdownLink
          name="designers"
          text="Designers"
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="block md:hidden"
        aria-label="Open search"
      >
        <IoSearch className="text-[22px]" />
      </button>
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
    </div>
  );
};
