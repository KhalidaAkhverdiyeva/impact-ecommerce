"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { CartItem } from "@/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    colorId: string
  ) => void;
  isLoading: boolean;
  error: string | null;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [productPrices, setProductPrices] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {}, [cartItems]);

  const fetchProductPrices = useCallback(async (items: CartItem[]) => {
    try {
      if (!items?.length) return;

      const promises = items.map(async (item) => {
        const response = await fetch(
          `https://impact-server-side-production.up.railway.app/api/products/all/${item.productId}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch price for product ${item.productId}`
          );
        }

        const data = await response.json();

        return {
          productId: item.productId,
          price: Number(data.product.price), // Ensure price is a number
        };
      });

      const products = await Promise.all(promises);
      const newPrices = products.reduce((acc, { productId, price }) => {
        acc[productId] = price;
        return acc;
      }, {} as Record<string, number>);

      setProductPrices(newPrices);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch product prices"
      );
    }
  }, []);

  // Add fetchCart function
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
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }

      const data = await response.json();

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid cart data received");
      }

      setCartItems(data);

      // Only fetch prices if we have cart items
      if (data.length > 0) {
        await fetchProductPrices(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch cart");
    } finally {
      setIsLoading(false);
    }
  }, [fetchProductPrices]);

  // Calculate total whenever cart items or prices change
  const cartTotal = useMemo(() => {
    if (!cartItems.length || !Object.keys(productPrices).length) {
      return 0;
    }

    const total = cartItems.reduce((sum, item) => {
      const price = productPrices[item.productId] || 0;
      const quantity = item.quantity || 0;
      const itemTotal = price * quantity;
      return sum + itemTotal;
    }, 0);

    return total;
  }, [cartItems, productPrices]);

  // Fetch cart on mount and when userId changes
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Modified addToCart to sync with backend
  const addToCart = useCallback((items: CartItem[] | CartItem) => {
    // If receiving an array (from backend), replace entire cart
    if (Array.isArray(items)) {
      setCartItems(items);
    } else {
      // If single item, append to cart
      setCartItems((prev) => [...prev, items]);
    }
  }, []);

  const removeFromCart = useCallback(async (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
  }, []);

  const updateQuantity = useCallback(
    async (productId: string, quantity: number, colorId: string) => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await fetch(
          `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart/quantity`,
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
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isLoading,
        error,
        cartTotal,
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
