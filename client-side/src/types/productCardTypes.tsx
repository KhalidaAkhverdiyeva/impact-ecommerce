export interface ColorVariant {
  color: string;
  mainImage: string;
  hoverImage: string;
  detailImages: string[];
  _id: string;
}

export interface Product {
  _id: string;
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
  oldPrice: number;
  rating: number;
  isNewProduct: boolean;
  isSoldOut: boolean;
  discountPercent: number;
  availableUnits: number;
  descriptionTitle: string;
  descriptionText: string;
}
