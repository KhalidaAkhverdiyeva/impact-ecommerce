import React from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StockFilterProps {
  currentInStock: boolean;
  setInStock: (value: boolean) => void;
}

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#272727",
    "&:hover": {
      backgroundColor: "rgba(39, 39, 39, 0.04)",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#272727",
  },
}));

export const StockFilter: React.FC<StockFilterProps> = ({
  currentInStock,
  setInStock,
}) => (
  <div className="flex justify-between py-[20px] border-t-[1px]">
    <div className="font-[700] text-[18px]">In stock only</div>
    <CustomSwitch
      onChange={() => setInStock(!currentInStock)}
      checked={currentInStock}
    />
  </div>
);
