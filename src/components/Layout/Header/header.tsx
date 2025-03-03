"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchSidebar from "@/components/Search Sidebar/searchSidebar";
import AddToCartSidebar from "@/components/Add to Card Sidebar/addToCartSidebar";
import { useHeaderStyles } from "@/hooks/useHeaderStyles";
import { Logo } from "./logo";
import { LeftNav } from "./leftNav";
import { RightNav } from "./rightNav";

export const Header = ({ transparent = true }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddToCartOpen, setIsAddCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { headerClass } = useHeaderStyles({
    transparent,
    isSticky,
    openDropdown: isDropdownOpen,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={headerClass}>
        <div className="py-[18px] md:py-[34px] md:px-[32px] lg:px-[48px] px-[20px] flex justify-between items-center w-full max-w-[1600px]">
          <LeftNav
            setIsDropdownOpen={setIsDropdownOpen}
            openDropdown={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <Logo
            transparent={transparent}
            isSticky={isSticky}
            openDropdown={isDropdownOpen}
          />
          <RightNav
            openSidebar={() => setIsOpen(true)}
            setIsAddCartOpen={setIsAddCartOpen}
          />
        </div>

        <SearchSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AddToCartSidebar
          isAddToCartOpen={isAddToCartOpen}
          setIsAddCartOpen={setIsAddCartOpen}
        />
      </header>
    </>
  );
};
