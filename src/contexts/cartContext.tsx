"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { CartItem } from "@/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isLoading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {}, [cartItems]);

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

      setCartItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch cart");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch cart on mount and when userId changes
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Modified addToCart to sync with backend
  const addToCart = useCallback(async (newItem: CartItem) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) throw new Error("Failed to add item to cart");

      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) =>
            item.productId === newItem.productId &&
            item.colorId === newItem.colorId
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.productId === newItem.productId &&
            item.colorId === newItem.colorId
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        }
        return [...prevItems, newItem];
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error adding to cart");
    }
  }, []);

  const removeFromCart = useCallback(async (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isLoading,
        error,
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
