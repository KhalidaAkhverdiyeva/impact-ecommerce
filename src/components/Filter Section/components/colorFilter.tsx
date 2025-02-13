import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { IoChevronDownOutline } from "react-icons/io5";

interface ColorFilterProps {
  currentColor: string | null;
  handleColorSelect: (color: string) => void;
}

export const ColorFilter: React.FC<ColorFilterProps> = ({
  currentColor,
  handleColorSelect,
}) => {
  const colors = ["#272727", "#8C8C8C", "#F3F3F3"];

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
        <div className="font-[700] text-[18px]">Color</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                currentColor === color ? 'border-black' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};