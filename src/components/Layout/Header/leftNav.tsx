import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "@/i18n/routing";
import DesignersDropdown from "./designersDropdown";
import FeatureDropdown from "./featureDropdown";
import DropdownLink from "./dropdownLink";
import SearchDrawer from "./searchDrawer";
import MobileMenuDrawer from "./mobileMenuDrawer";
import { useState } from "react";

interface LeftNavProps {
  openDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
}

export const LeftNav = ({ openDropdown, toggleDropdown }: LeftNavProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center gap-[15px] flex-1">
      <div className="flex justify-center items-center lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <IoMenu className="text-[30px]" />
        </button>
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
          DropdownComponent={DesignersDropdown}
        />
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <DropdownLink
          name="features"
          text="Features"
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          DropdownComponent={FeatureDropdown}
        />
      </ul>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="block md:hidden"
        aria-label="Open search"
      >
        <IoSearch className="text-[22px]" />
      </button>
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};
