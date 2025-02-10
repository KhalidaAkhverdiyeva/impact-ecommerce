"use client";
import React, { useCallback, useEffect, useState } from "react";
import SortBy from "./sortBy";
import FilterAccordion from "./filterAccordion";
import ProductGrid from "../Product Card/productGrid";
import { Product } from "@/types/productCardTypes";
import { IoCloseOutline } from "react-icons/io5";

interface FilterSectionProps {
  filter: string | null;
  color: string | null;
  designer: string | null;
  type: string | null;
  setColor: (color: string | null) => void;
  setDesigner: (designer: string | null) => void;
  setType: (type: string | null) => void;
  setInStock: (inStock: boolean) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filter,
  color,
  designer,
  type,
  setColor,
  setDesigner,
  setType,
  setInStock: setInStockProp,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [inStock, setInStockLocal] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 9;

  const [sortOption, setSortOption] = useState<string>("Featured");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        color: color || "",
        designer: designer || "",
        productType: type || "",
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        inStock: inStock.toString(),
        sort: sortOption,
      });

      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/products/all?${queryParams.toString()}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const totalPages = Math.ceil(data.totalCount / itemsPerPage);

      setProducts(data.products);
      setTotalPages(totalPages);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, [
    color,
    designer,
    inStock,
    maxPrice,
    minPrice,
    type,
    currentPage,
    sortOption,
  ]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const activeFilters = [
    color && ` ${color}`,
    designer && `${designer}`,
    type && ` ${type}`,
    inStock === false && `Not in Stock`,
  ].filter(Boolean);

  const handleClearFilters = () => {
    if (filter && typeof filter === "string") {
      if (color && filter.includes(color)) setColor(null);
      if (designer && filter.includes(designer)) setDesigner(null);
      if (type && filter.includes(type)) setType(null);
      if (filter.includes("Not in Stock")) {
        setInStockLocal(true);
        setInStockProp(true);
      }
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="mb-[30px] flex justify-between">
        <div className="flex items-center gap-[10px] w-[22%]">Filters</div>
        <div
          className={`flex ${
            activeFilters.length > 0 ? "justify-between" : "justify-end"
          } w-[77%]`}
        >
          {activeFilters.length > 0 && (
            <div className="bg-[#E9E9E9] px-[10px] py-[5px] flex items-center gap-[5px]">
              {activeFilters.map((filter, index) => (
                <div key={index} className="flex items-center gap-[5px]">
                  <span>{filter}</span>
                  <IoCloseOutline
                    className="cursor-pointer"
                    onClick={() => {
                      handleClearFilters();
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <SortBy setSortOption={setSortOption} />
          </div>
        </div>
      </div>
      <div className="flex gap-[40px]">
        <FilterAccordion
          setColor={setColor}
          setDesigner={setDesigner}
          setType={setType}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setInStock={setInStockLocal}
          currentColor={color}
          currentDesigner={designer}
          currentType={type}
          currentMinPrice={minPrice}
          currentMaxPrice={maxPrice}
          currentInStock={inStock}
        />
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FilterSection;
