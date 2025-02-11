"use client";
import React, { useCallback, useEffect, useState } from "react";
import SortBy from "./sortBy";
import FilterAccordion from "./filterAccordion";
import ProductGrid from "../Product Card/productGrid";
import { IoCloseOutline } from "react-icons/io5";
import { FilterSectionProps, Product } from "@/types";

const FilterSection: React.FC<FilterSectionProps> = ({
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

  const [sortOption, setSortOption] = useState<string>("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Create base query params without sort
      const baseParams = {
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        color: color || "",
        designer: designer || "",
        productType: type || "",
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        inStock: inStock.toString(),
      };

      // Only add sort parameter if a sort option is selected
      const queryParams = new URLSearchParams(baseParams);

      if (sortOption) {
        switch (sortOption) {
          case "Price, low to high":
            queryParams.append("sort", "price:asc");
            break;
          case "Price, high to low":
            queryParams.append("sort", "price:desc");
            break;
        }
      }

      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/products/all?${queryParams.toString()}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalCount / itemsPerPage));
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

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [color, designer, type, minPrice, maxPrice, inStock, sortOption]);

  const activeFilters = [
    color && ` ${color}`,
    designer && `${designer}`,
    type && ` ${type}`,
    inStock === false && `Not in Stock`,
  ].filter(Boolean);

  const handleClearFilters = (filterToRemove: string) => {
    // Remove color filter
    if (filterToRemove.includes("#")) {
      setColor(null);
    }
    // Remove designer filter
    else if (designer && filterToRemove.includes(designer)) {
      setDesigner(null);
    }
    // Remove type filter
    else if (type && filterToRemove.includes(type)) {
      setType(null);
    }
    // Remove in stock filter
    else if (filterToRemove === "Not in Stock") {
      setInStockLocal(true);
      setInStockProp(true);
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
                    onClick={() => filter && handleClearFilters(filter)}
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <SortBy setSortOption={setSortOption} currentSort={sortOption} />
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
