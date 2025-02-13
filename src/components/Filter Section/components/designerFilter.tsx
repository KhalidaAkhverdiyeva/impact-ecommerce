import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { IoChevronDownOutline } from "react-icons/io5";

interface DesignerFilterProps {
  currentDesigner: string | null;
  handleDesignerSelect: (designer: string) => void;
}

export const DesignerFilter: React.FC<DesignerFilterProps> = ({
  currentDesigner,
  handleDesignerSelect,
}) => {
  const designers = ["Andreas Engesvik", "Pierre Charpin", "George Sowden"];

  return (
    <Accordion
      sx={{
        boxShadow: "none",
        "&:before": {
          display: "none",
        },
        "& .MuiAccordionSummary-root": { padding: 0 },
        "& .MuiAccordionDetails-root": { padding: "10px 0" },
      }}
    >
      <AccordionSummary
        expandIcon={
          <div className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center">
            <IoChevronDownOutline />
          </div>
        }
      >
        <div className="font-[700] text-[18px]">Designer</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="space-y-2 text-[#7a7979]">
          {designers.map((designer) => (
            <label
              key={designer}
              className="flex items-center capitalize cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                onChange={() => handleDesignerSelect(designer)}
                checked={currentDesigner === designer}
              />
              {designer}
            </label>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
