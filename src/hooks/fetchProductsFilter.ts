import { useState, useCallback } from 'react';
import { Product } from '@/types';

interface UseProductsParams {
  currentPage: number;
  itemsPerPage: number;
  color: string | null;
  designer: string | null;
  type: string | null;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
  sortOption: string;
}

export const useProducts = ({
  currentPage,
  itemsPerPage,
  color,
  designer,
  type,
  minPrice,
  maxPrice,
  inStock,
  sortOption,
}: UseProductsParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
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

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalCount / itemsPerPage));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage, color, designer, type, minPrice, maxPrice, inStock, sortOption]);

  return { products, loading, error, totalPages, fetchProducts };
};