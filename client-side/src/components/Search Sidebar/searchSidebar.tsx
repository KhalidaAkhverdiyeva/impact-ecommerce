import React, { useState } from "react";

const SearchSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  const openSidebar = () => {
    setOverlayVisible(true); // Show overlay first
    setTimeout(() => {
      setIsOpen(true); // Then show sidebar
    }, 200); // Delay to allow overlay to appear

    // Set textVisible to true after the sidebar has fully opened
    setTimeout(() => {
      setTextVisible(true); // Show text after sidebar opens
    }, 500); // Match this with the sidebar's transition duration
  };

  const closeSidebar = () => {
    setTextVisible(false); // Hide text first
    setTimeout(() => {
      setIsOpen(false); // Close sidebar
      setTimeout(() => {
        setOverlayVisible(false); // Then hide overlay
      }, 300); // Match with sidebar transition duration
    }, 200); // Delay to allow text to disappear
  };

  return (
    <>
      <button
        onClick={openSidebar}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
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
