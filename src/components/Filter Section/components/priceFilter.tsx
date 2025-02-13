import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { IoChevronDownOutline } from "react-icons/io5";

interface PriceFilterProps {
  price: [number, number];
  handlePriceInputChange: (type: "min" | "max", value: string) => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  price,
  handlePriceInputChange,
}) => {
  return (
    <Accordion
      sx={{
        boxShadow: 'none',
        '&:before': { display: 'none' },
        '& .MuiAccordionSummary-root': { padding: 0 },
        '& .MuiAccordionDetails-root': { padding: '10px 0' },
      }}
    >
      <AccordionSummary
        expandIcon={
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        }
      >
        <div className="font-[700] text-[18px]">Price</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-500 mb-1 block">Min</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                pattern="\d*"
                value={price[0]}
                onChange={(e) => handlePriceInputChange("min", e.target.value)}
                min="0"
                max={price[1]}
                className="w-full border rounded py-2 px-7 focus:outline-none focus:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-500 mb-1 block">Max</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                pattern="\d*"
                value={price[1]}
                onChange={(e) => handlePriceInputChange("max", e.target.value)}
                min={price[0]}
                max="1500"
                className="w-full border rounded py-2 px-7 focus:outline-none focus:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};