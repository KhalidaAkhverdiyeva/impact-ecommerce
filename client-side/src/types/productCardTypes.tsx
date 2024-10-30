export interface ColorVariant {
  color: string;
  mainImage: string;
  hoverImage: string;
  detailImages: string[];
}

export interface Product {
  id: string;
  title: string;
  designer: string;
  productType: string;
  colorVariants: ColorVariant[];
  dimensions: string;
  material: string;
  colors: string;
  currency: string;
  price: number;
  rating: number;
  isNewProduct: boolean;
  isSoldOut: boolean;
  availableUnits: number;
  descriptionTitle: string;
  descriptionText: string;
}
