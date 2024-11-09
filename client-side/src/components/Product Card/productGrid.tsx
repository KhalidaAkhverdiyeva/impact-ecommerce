import React from "react";
import { Product } from "@/types/productCardTypes";
import ProductCard from "./productCard";
import ProductCardSkeletons from "../Skeletons/Product Card Skeleton/productCardSkeleton";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  error,
}) => {
  if (loading) return <ProductCardSkeletons />;
  if (error) return <div>Error: {error}</div>;

  if (products.length === 0) {
    return <div className="lg:w-[1100px]">No Products Found!</div>;
  }

  return (
    <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
