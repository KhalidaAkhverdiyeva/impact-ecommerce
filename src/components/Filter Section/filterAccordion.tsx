import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomSwitch from "./customSwitch";
import { Tooltip } from "@mui/material";

interface AccordionFilterProps {
  setColor: (color: string | null) => void;
  setDesigner: (designer: string | null) => void;
  setType: (type: string | null) => void;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  setInStock: (inStock: boolean) => void;
  currentColor: string | null;
  currentDesigner: string | null;
  currentType: string | null;
  currentMinPrice: number;
  currentMaxPrice: number;
  currentInStock: boolean;
}

const FilterAccordion: React.FC<AccordionFilterProps> = ({
  setColor,
  setDesigner,
  setType,
  setMinPrice,
  setMaxPrice,
  setInStock,
  currentColor,
  currentDesigner,
  currentType,
  currentMinPrice,
  currentMaxPrice,
  currentInStock,
}) => {
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [price, setLocalPrice] = useState([currentMinPrice, currentMaxPrice]);

  const handlePriceInputChange = (type: "min" | "max", value: string) => {
    // Remove leading zeros and convert to number
    const numValue = parseInt(value.replace(/^0+/, "")) || 0;

    if (type === "min") {
      setLocalPrice([numValue, price[1]]);
      setMinPrice(numValue);
    } else {
      setLocalPrice([price[0], numValue]);
      setMaxPrice(numValue);
    }
  };

  // Handle color selection
  const handleColorSelect = (selectedColor: string) => {
    setColor(currentColor === selectedColor ? null : selectedColor);
  };

  // Handle designer selection
  const handleDesignerSelect = (selectedDesigner: string) => {
    setDesigner(currentDesigner === selectedDesigner ? null : selectedDesigner);
  };

  // Handle type selection
  const handleTypeSelect = (selectedType: string) => {
    setType(currentType === selectedType ? null : selectedType);
  };

  return (
    <div className="hidden lg:block w-[300px] text-[#272727]">
      {/* In Stock Filter */}
      <div className="flex justify-between py-[20px] border-t-[1px]">
        <div className="font-[700] text-[18px]">In stock only</div>
        <CustomSwitch
          onChange={() => setInStock(!currentInStock)}
          checked={currentInStock}
        />
      </div>

      {/* Designer Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsDesignerOpen(!isDesignerOpen)}
        >
          <div className="font-[700] text-[18px]">Designer</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] space-y-2 text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out origin-top ${
            isDesignerOpen
              ? "max-h-[200px] opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-95"
          }`}
        >
          {["Andreas Engesvik", "Pierre Charpin", "George Sowden"].map(
            (designer) => (
              <label key={designer} className="flex items-center capitalize">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                  onChange={() => handleDesignerSelect(designer)}
                  checked={currentDesigner === designer}
                />
                {designer}
              </label>
            )
          )}
        </div>
      </div>

      {/* Color Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsColorOpen(!isColorOpen)}
        >
          <div className="font-[700] text-[18px]">Color</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] flex gap-[13px] text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out ${
            isColorOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {[
            { color: "#9B503D", name: "Brown" },
            { color: "#F3DF66", name: "Yellow" },
            { color: "#5D89A2", name: "Teal" },
          ].map(({ color, name }) => (
            <Tooltip key={color} title={name} placement="top">
              <div
                className={`w-[40px] h-[16px] cursor-pointer ${
                  currentColor === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsTypeOpen(!isTypeOpen)}
        >
          <div className="font-[700] text-[18px]">Product Type</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] space-y-2 text-[#7a7979] overflow-hidden transition-all duration-500 ease-in-out origin-top ${
            isTypeOpen
              ? "max-h-[200px] opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-95"
          }`}
        >
          {["Office", "Decoration", "Lighting"].map((type) => (
            <label key={type} className="flex items-center capitalize">
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                onChange={() => handleTypeSelect(type)}
                checked={currentType === type}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="py-[20px] border-t-[1px] pr-[10px]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <div className="font-[700] text-[18px]">Price</div>
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        </div>
        <div
          className={`mt-[10px] overflow-hidden transition-all duration-300 ease-in-out ${
            isPriceOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {isPriceOpen && (
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-500 mb-1 block">
                    Min
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      pattern="\d*"
                      value={price[0]}
                      onChange={(e) =>
                        handlePriceInputChange("min", e.target.value)
                      }
                      min="0"
                      max={price[1]}
                      className="w-full border rounded py-2 px-7 focus:outline-none focus:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-500 mb-1 block">
                    Max
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="text"
                      pattern="\d*"
                      value={price[1]}
                      onChange={(e) =>
                        handlePriceInputChange("max", e.target.value)
                      }
                      min={price[0]}
                      max="1500"
                      className="w-full border rounded py-2 px-7 focus:outline-none focus:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
