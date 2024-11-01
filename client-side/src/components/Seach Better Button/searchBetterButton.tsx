import React from "react";

interface SearchBetterButtonProps {
  onClick: () => void;
}

const SearchBetterButton: React.FC<SearchBetterButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-[30px] cursor-pointer right-[30px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-110"
    >
      <div className="bg-white p-[15px] rounded-full shadow-lg flex items-center justify-center transition-transform duration-300">
        <svg
          role="presentation"
          fill="none"
          strokeWidth="2"
          focusable="false"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <circle
            cx="7.067"
            cy="7.067"
            r="6.067"
            stroke="currentColor"
          ></circle>
          <path
            d="M11.4 11.4 14 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="M7 4v6M4 7h6" stroke="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBetterButton;
