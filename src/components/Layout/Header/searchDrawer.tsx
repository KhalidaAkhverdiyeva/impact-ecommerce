import { Drawer } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Product } from "@/types";
import ProductSkeleton from "./searchSkeleton";

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDrawer = ({ isOpen, onClose }: SearchDrawerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchQuery.trim()) {
        setProducts([]);
        return;
      }

      try {
        setLoading(true);
        const url = `http://localhost:3001/api/products/all?search=${encodeURIComponent(
          searchQuery
        )}`;

        const response = await fetch(url);
        const data = await response.json();
        // Add console.log to debug the response
        console.log("Search response:", data);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        // Make sure we're setting an array
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search requests
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <Drawer
      anchor="top"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          height: "100vh",
          padding: "48px",
          background: "#fff",
        },
      }}
    >
      <div className="flex flex-col gap-6">
        <button
          onClick={onClose}
          className="self-end p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close search"
        >
          <IoClose size={24} />
        </button>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for..."
            className="w-full max-w-2xl  py-3 border-b-2 border-gray-200 focus:border-black outline-none placeholder:text-[#939393] font-[700] text-[32px]"
            autoFocus
          />
        </div>

        {/* Search Results */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product._id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-[96px] h-[125px]">
                    <Image
                      src={product.colorVariants[0].mainImage}
                      alt={product.title}
                      fill
                      className="object-cover  "
                    />
                  </div>
                  <div>
                    <h3 className="text-[12px]">{product.designer}</h3>
                    <h3 className="font-[700] text-lg">{product.title}</h3>
                    <p className="text-gray-600">${product.price}.00</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery && !loading ? (
            <div className="text-center text-gray-500">
              No products found for &quot;{searchQuery}&quot;.
            </div>
          ) : null}
        </div>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
