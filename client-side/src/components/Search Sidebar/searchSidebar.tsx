"use client";
import React, { useEffect, useState } from "react";

interface SearchSidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({ isOpen, setIsOpen }) => {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setOverlayVisible(true); // Show overlay first
      setTimeout(() => {
        setTextVisible(true); // Show text after sidebar opens
      }, 300); // Match this with the sidebar's transition duration
    } else {
      setTextVisible(false); // Hide text first
      setTimeout(() => {
        setOverlayVisible(false); // Then hide overlay
      }, 300); // Match this with sidebar closing duration
    }
  }, [isOpen]);

  const closeSidebar = () => {
    setIsOpen(false); // Trigger closing the sidebar
  };

  return (
    <>
      {overlayVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 z-[70] transition-opacity duration-300 ease-in-out ${
            overlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-[95%] m-[20px] z-[70] bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-80" : "w-0"
        } overflow-hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={closeSidebar}
        >
          &times;
        </button>
        <div className="p-4">
          <h2
            className={`text-lg font-bold transition-opacity duration-300 ${
              textVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Search Sidebar
          </h2>
          {/* Add your search input or other content here */}
        </div>
      </div>
    </>
  );
};

export default SearchSidebar;
