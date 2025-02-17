//hex code to color name

const colorMap: { [key: string]: string } = {
  "#272727": "Black",
  "#487311": "Green",
  "#83A190": "Dark Green",
  "#9B503D": "Brown",
  "#F3DF66": "Yellow",
  "#475785": "Ash Blue",
  "#1039D3": "Blue",
  "#1970BC": "Sky Blue",
  "#E7DCE4": "Pink",
  "#9CADB9": "Baby Blue",
  "#BEBDB9": "Grey",
  "#E1C176": "Orange",
  "#CE7C41": "Dark Orange",
  "#C3AF64": "Light Brown",
  "#C4A787": "Light Brown",
  "#5D89A2": "Dark Blue",
  "#F3F4F1": "Silver",
};

export const hexToColorName = (hex: string): string => {
  // Normalize hex color (uppercase and ensure # prefix)
  const normalizedHex = hex.toUpperCase().startsWith("#")
    ? hex.toUpperCase()
    : `#${hex.toUpperCase()}`;

  // Return mapped color name or original hex if not found
  return colorMap[normalizedHex] || hex;
};
