"use client";
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

interface QuantityBlockProps {
  onQuantityChange: (quantity: number) => void;
  availableUnits: number;
}

const QuantityBlock: React.FC<QuantityBlockProps> = ({
  onQuantityChange,
  availableUnits,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [showStockAlert, setShowStockAlert] = useState(false);

  useEffect(() => {
    // Update local quantity when prop changes
    setQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    // Ensure quantity never exceeds available units
    if (quantity > availableUnits) {
      setQuantity(availableUnits);
      onQuantityChange(availableUnits);
      setShowStockAlert(true);
    }
  }, [quantity, availableUnits, onQuantityChange]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;

    if (newQuantity > availableUnits) {
      setShowStockAlert(true);
      return;
    }

    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value > availableUnits) {
      setShowStockAlert(true);
      setQuantity(availableUnits);
      onQuantityChange(availableUnits);
      return;
    }
    handleQuantityChange(value);
  };

  return (
    <div className="flex items-center gap-[10px] py-[15px] relative">
      <div className="flex border-[1px] border-solid border-[#E6E6E6] text-[#272727]">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="px-[16px] py-[12px] border-r-[1px] border-solid border-[#E6E6E6]"
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={handleInputChange}
          className="w-[50px] text-center outline-none"
          min="1"
          max={availableUnits}
        />
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className={`px-[16px] py-[12px] border-l-[1px] border-solid border-[#E6E6E6] ${
            quantity >= availableUnits ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={quantity >= availableUnits}
        >
          +
        </button>
      </div>

      <Snackbar
        open={showStockAlert}
        autoHideDuration={3000}
        onClose={() => setShowStockAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="warning"
          sx={{
            backgroundColor: "#272727",
            color: "white",
            ".MuiAlert-icon": { color: "white" },
          }}
        >
          Only {availableUnits} items left in stock
        </Alert>
      </Snackbar>
    </div>
  );
};

export default QuantityBlock;
