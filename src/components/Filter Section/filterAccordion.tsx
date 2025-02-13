import React, { useState } from "react";

import { AccordionFilterProps } from "@/types";
import { StockFilter } from "./components/stockFilter";
import { DesignerFilter } from "./components/designerFilter";
import { ColorFilter } from "./components/colorFilter";
import { TypeFilter } from "./components/typeFilter";
import { PriceFilter } from "./components/priceFilter";

interface ExtendedAccordionFilterProps extends AccordionFilterProps {
  isMobile?: boolean;
}

const FilterAccordion: React.FC<ExtendedAccordionFilterProps> = ({
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
  isMobile = false,
}) => {
  const [price, setLocalPrice] = useState<[number, number]>([
    currentMinPrice,
    currentMaxPrice,
  ]);

  const handleDesignerSelect = (selectedDesigner: string) => {
    setDesigner(currentDesigner === selectedDesigner ? null : selectedDesigner);
  };

  const handleColorSelect = (selectedColor: string) => {
    setColor(currentColor === selectedColor ? null : selectedColor);
  };

  const handleTypeSelect = (selectedType: string) => {
    setType(currentType === selectedType ? null : selectedType);
  };

  const handlePriceInputChange = (type: "min" | "max", value: string) => {
    const numValue = parseInt(value.replace(/^0+/, "")) || 0;
    if (type === "min") {
      setLocalPrice([numValue, price[1]]);
      setMinPrice(numValue);
    } else {
      setLocalPrice([price[0], numValue]);
      setMaxPrice(numValue);
    }
  };

  return (
    <div className={isMobile ? "block" : "hidden lg:block"}>
      <StockFilter currentInStock={currentInStock} setInStock={setInStock} />
      <DesignerFilter
        currentDesigner={currentDesigner}
        handleDesignerSelect={handleDesignerSelect}
      />
      <ColorFilter
        currentColor={currentColor}
        handleColorSelect={handleColorSelect}
      />
      <TypeFilter
        currentType={currentType}
        handleTypeSelect={handleTypeSelect}
      />
      <PriceFilter
        price={price}
        handlePriceInputChange={handlePriceInputChange}
      />
    </div>
  );
};

export default FilterAccordion;
