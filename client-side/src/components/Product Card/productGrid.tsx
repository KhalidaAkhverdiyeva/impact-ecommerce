import React, { useEffect, useState } from "react";
import { Product } from "@/types/productCardTypes";
import ProductCard from "./productCard";

interface ProductResponse {
  products: Product[];
}

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products/all");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: ProductResponse = await response.json();
      setProducts(data.products);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
