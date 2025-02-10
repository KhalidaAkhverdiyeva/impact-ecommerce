"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ColorContextType = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({
  children,
  defaultColor,
}: {
  children: ReactNode;
  defaultColor: string;
}) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
