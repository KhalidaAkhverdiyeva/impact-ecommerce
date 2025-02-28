"use client";
import React, { useEffect, useState } from "react";
import SortBy from "./sortBy";
import FilterAccordion from "./filterAccordion";
import ProductGrid from "../Product Card/productGrid";
import { IoCloseOutline } from "react-icons/io5";
import { FilterSectionProps } from "@/types";
import { Drawer, IconButton } from "@mui/material";
import { IoFilterOutline } from "react-icons/io5";
import { useProducts } from "@/hooks/fetchProductsFilter";

const FilterSection: React.FC<FilterSectionProps> = ({
  color,
  designer,
  type,
  setColor,
  setDesigner,
  setType,
}) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [inStock, setInStockLocal] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [sortOption, setSortOption] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { products, loading, error, totalPages, fetchProducts } = useProducts({
    currentPage,
    itemsPerPage: 9,
    color,
    designer,
    type,
    minPrice,
    maxPrice,
    inStock,
    sortOption,
  });

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
    if (filterToRemove.includes("#")) setColor(null);
    else if (designer && filterToRemove.includes(designer)) setDesigner(null);
    else if (type && filterToRemove.includes(type)) setType(null);
    else if (filterToRemove === "Not in Stock") {
      setInStockLocal(true);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="mb-[30px] flex justify-between">
        <div className="flex items-center gap-[10px] w-[15%] md:w-[29%]">
          {/* Show Filter text on desktop, button on mobile */}
          <span className="hidden md:block">Filters</span>
          <IconButton
            className="md:hidden"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="open filters"
          >
            <IoFilterOutline />
          </IconButton>
        </div>
        <div
          className={`flex items-center ${
            activeFilters.length > 0 ? "justify-between" : "justify-end"
          } w-[77%]`}
        >
          {activeFilters.length > 0 && (
            <div className=" px-[10px] py-[5px] flex items-center gap-[5px]">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex bg-[#E9E9E9] items-center gap-[5px] p-[5px]"
                >
                  <span>{filter}</span>
                  <IoCloseOutline
                    className="cursor-pointer"
                    onClick={() => filter && handleClearFilters(filter)}
                  />
                </div>
              ))}
            </div>
          )}
          <SortBy setSortOption={setSortOption} currentSort={sortOption} />
        </div>
      </div>
      <div className="w-[100%] flex gap-[40px]">
        <div className="hidden md:block">
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
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "80%",
                maxWidth: "300px",
                padding: "20px",
              },
              display: { md: "none" },
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <IconButton onClick={() => setIsDrawerOpen(false)}>
                <IoCloseOutline />
              </IconButton>
            </div>

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
              isMobile={true}
            />
          </Drawer>
        </div>
        <div className="w-[100%]">
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
    </div>
  );
};

export default FilterSection;
