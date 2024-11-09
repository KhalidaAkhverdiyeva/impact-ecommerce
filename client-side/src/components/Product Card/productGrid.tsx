import React from "react";
import { Product } from "@/types/productCardTypes";
import ProductCard from "./productCard";
import ProductCardSkeletons from "../Skeletons/Product Card Skeleton/productCardSkeleton";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  error,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (loading) return <ProductCardSkeletons />;
  if (error) return <div>Error: {error}</div>;

  if (products.length === 0) {
    return <div className="lg:w-[1100px]">No Products Found!</div>;
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-6 flex-grow">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="text-[#4f4f4f] disabled:text-gray-300"
        >
          <GrFormPrevious />
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-[#4f4f4f] disabled:text-gray-300"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
