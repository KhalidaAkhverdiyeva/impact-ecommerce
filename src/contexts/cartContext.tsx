"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { CartContextType, CartItem, Product } from "@/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Record<string, Product>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {}, [cartItems]);

  //Fetch product details

  const fetchProductDetails = useCallback(async (items: CartItem[]) => {
    try {
      if (!items?.length) return;

      const uniqueProductIds = [
        ...new Set(items.map((item) => item.productId)),
      ];

      const promises = uniqueProductIds.map(async (productId) => {
        const response = await fetch(
          `http://localhost:3001/api/products/all/${productId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product ${productId}`);
        }

        const data = await response.json();

        return { productId, ...data.product }; // Store full product info
      });

      const productsArray = await Promise.all(promises);

      const productMap = productsArray.reduce((acc, product) => {
        acc[product.productId] = product;
        return acc;
      }, {} as Record<string, Product>);

      setProducts((prev) => ({ ...prev, ...productMap }));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch product details"
      );
    }
  }, []);

  // Add fetch cartItems function
  const fetchCart = useCallback(async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `http://localhost:3001/api/users/${userId}/cart`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }

      const data = await response.json();

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid cart data received");
      }

      setCartItems(data);

      if (data.length > 0) {
        await fetchProductDetails(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch cart");
    } finally {
      setIsLoading(false);
    }
  }, [fetchProductDetails]);

  const enrichedCartItems = useMemo(() => {
    return cartItems.map((item) => ({
      ...item,
      product: products[item.productId] || null, // Attach product details
    }));
  }, [cartItems, products]);

  // Fetch cart on mount and when userId changes
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const cartTotal = useMemo(() => {
    return enrichedCartItems.reduce((sum, item) => {
      const price = item.product?.price || 0;
      const quantity = item.quantity || 0;
      return sum + price * quantity;
    }, 0);
  }, [enrichedCartItems]);

  // Modified addToCart to sync with backend
  const addToCart = useCallback(
    async (items: CartItem[] | CartItem) => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User not logged in");
        return;
      }

      try {
        const itemsToAdd = Array.isArray(items) ? items : [items];

        // Validate items before sending
        if (!itemsToAdd.every((item) => item.productId && item.colorId)) {
          throw new Error("Invalid item data: Missing productId or colorId");
        }

        // Format items correctly for the API
        const formattedItems = itemsToAdd.map((item) => ({
          productId: item.productId,
          colorId: item.colorId,
          quantity: Math.max(1, item.quantity || 1), // Ensure positive quantity
        }));

        console.log("Attempting to add to cart:", {
          userId,
          items: formattedItems,
        });

        const response = await fetch(
          `http://localhost:3001/api/users/${userId}/cart`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: formattedItems }),
            credentials: "include", // Add this if using cookies
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("Server error:", data);
          throw new Error(data.message || "Failed to add to cart");
        }

        // Update local state with the server response
        setCartItems(data);

        // Fetch fresh product details
        await fetchProductDetails(itemsToAdd);

        // Clear any existing errors
        setError(null);
      } catch (err) {
        console.error("Add to cart error:", err);
        setError(
          err instanceof Error
            ? `Error adding to cart: ${err.message}`
            : "Failed to add to cart"
        );
        throw err; // Re-throw to handle in the component
      }
    },
    [fetchProductDetails]
  );

  const removeFromCart = useCallback(async (itemId: string) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${userId}/cart/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to remove from cart");

      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to remove from cart"
      );
    }
  }, []);

  const updateQuantity = useCallback(
    async (productId: string, quantity: number, colorId: string) => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await fetch(
          `http://localhost:3001/api/users/${userId}/cart/quantity`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, colorId, quantity }),
          }
        );

        if (!response.ok) throw new Error("Failed to update quantity");

        setCartItems((prev) =>
          prev.map((item) =>
            item.productId === productId && item.colorId === colorId
              ? { ...item, quantity }
              : item
          )
        );
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error updating quantity"
        );
      }
    },
    []
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: enrichedCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isLoading,
        error,
        products,
        cartTotal,
        fetchCart,
        enrichedCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
