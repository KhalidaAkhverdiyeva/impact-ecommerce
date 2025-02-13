import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { IoChevronDownOutline } from "react-icons/io5";

interface TypeFilterProps {
  currentType: string | null;
  handleTypeSelect: (type: string) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({
  currentType,
  handleTypeSelect,
}) => {
  const types = ["Cup", "Vase", "Bowl"];

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
        <div className="font-[700] text-[18px]">Type</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="space-y-2 text-[#7a7979]">
          {types.map((type) => (
            <label key={type} className="flex items-center capitalize cursor-pointer">
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
      </AccordionDetails>
    </Accordion>
  );
};