"use client";
import React, { useCallback, useEffect, useState } from "react";
import SortBy from "./sortBy";
import FilterAccordion from "./filterAccordion";
import ProductGrid from "../Product Card/productGrid";
import { Product } from "@/types/productCardTypes";
import { IoCloseOutline } from "react-icons/io5";

const FilterSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [color, setColor] = useState<string | null>(null);
  const [designer, setDesigner] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [inStock, setInStock] = useState<boolean>(true);

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
        `http://localhost:3001/api/products/all?${queryParams.toString()}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const totalPages = Math.ceil(data.totalCount / itemsPerPage);

      setProducts(data.products);
      setTotalPages(totalPages);
    } catch (err: any) {
      setError(err.message);
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
    sortOption, // Include sortOption in dependency array
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
                      if (filter.includes(color)) setColor(null);
                      if (filter.includes(designer)) setDesigner(null);
                      if (filter.includes(type)) setType(null);
                      if (filter.includes("Not in Stock")) setInStock(true);
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
          setInStock={setInStock}
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

{
  /* <svg
role="presentation"
fill="none"
focusable="false"
strokeWidth="2"
width="20"
height="14"
viewBox="0 0 20 14"
>
<path
  d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z"
  fill="currentColor"
></path>
<path
  d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z"
  fill="currentColor"
></path>
<path
  d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z"
  fill="currentColor"
></path>
<path
  d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z"
  fill="currentColor"
></path>
<circle cx="7" cy="3" r="2" stroke="currentColor"></circle>
<circle cx="13" cy="11" r="2" stroke="currentColor"></circle>
</svg> */
}
