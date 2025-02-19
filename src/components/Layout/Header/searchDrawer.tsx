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
  const [loading, setLoading] = useState(false);

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
          padding: {
            xs: "24px", // Mobile devices
            sm: "32px", // Tablet
            md: "48px", // Desktop
          },
          background: "#fff",
        },
      }}
    >
      <div className="flex flex-col  md:gap-6">
        <div className="flex items-center justify-center ">
          <div className="flex border-b-2 w-[672px] border-gray-200 focus-within:border-black transition-colors duration-200">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for..."
              className="w-full px-[20px] py-3  outline-none  placeholder:text-[#939393] font-[700] text-[32px]"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 self-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close search"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className=" max-w-2xl mx-auto w-full">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-6">
              {[...Array(4)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-6">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/products/${product.title}?index=0`}
                  onClick={onClose}
                  className="flex items-center gap-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
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
